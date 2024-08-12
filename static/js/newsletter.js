document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#nlfrm').addEventListener('submit', function (event) {
      event.preventDefault();
      var data = this;
      let formData = new FormData(data);
      const dataObject = Object.fromEntries(formData.entries());
      const j_body = JSON.stringify(dataObject);
      console.log('j_body', j_body);
      fetch(data.getAttribute('action'), {
        method: data.getAttribute('method'),
        body: j_body
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Something went wrong on server!");
          }
        })
        .then((response) => {
          // sconsole.log( response );
          let resp = JSON.parse(response.body);
          let respbox = document.querySelector('#nlrsp');
          respbox.innerHTML = '<span>' + resp.message + '</span>';
        })
    });
  });
