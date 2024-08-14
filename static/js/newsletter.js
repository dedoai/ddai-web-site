document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('form-overlay');
    var respbox = document.querySelector('#form-overlay > div');
    document.querySelector('#nlfrm').addEventListener('submit', function (event) {
      event.preventDefault();
      overlay.classList.toggle('active');
      var frm = this;
      let formData = new FormData(frm);
      const dataObject = Object.fromEntries(formData.entries());
      const j_body = JSON.stringify(dataObject);
      
      document.querySelector('.nl-deny').addEventListener('click', function (event) {
         overlay.classList.toggle('active');
         return;
      });

      document.querySelector('.nl-accept').addEventListener('click', function(event){
        event.preventDefault();
        fetch(frm.getAttribute('action'), {
        method: frm.getAttribute('method'),
        body: j_body
      })
      .then((response) => {
         if (response.status === 200) {
         return response.json();
         } else {
         const err = "Something went wrong on server!";
         respbox.innerHTML = '<span>' + err + '</span>';
         setTimeout( ()=>{overlay.classList.toggle('active')}, 2000 );
         //throw new Error(err);
         }
      })
      .then((response) => {
         let resp = JSON.parse(response.body);
         respbox.innerHTML = '<span>' + resp.message + '</span>';
         setTimeout( ()=>{overlay.classList.toggle('active')}, 2000 );
      })
    });
  });
});
document.getElementById("form-overlay").addEventListener("click",function(e) {
    if (!document.querySelector("#form-overlay > div").contains(e.target)){
        this.classList.toggle('active');
    }
});
