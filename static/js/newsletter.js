document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('form-overlay');
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
         throw new Error(err);
         }
      })
      .then((response) => {
         let resp = JSON.parse(response.body);
         let respbox = document.querySelector('#nlrsp');
         respbox.innerHTML = '<span>' + resp.message + '</span>';
         setTimeout( overlay.classList.toggle('active'), 1000 );
      });
    });
  });
});
