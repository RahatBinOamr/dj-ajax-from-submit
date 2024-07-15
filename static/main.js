const form = document.getElementById('submit-form');
const alertBox = document.getElementById('alert-box');
const imageBox = document.getElementById('image-box');

const name = document.getElementById('id_name');
const description = document.getElementById('id_description');
const image = document.getElementById('id_image');
const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value;

const url = '';

image.addEventListener('change', () => {
  const image_data = image.files[0];
  const image_url = URL.createObjectURL(image_data);
  imageBox.innerHTML = `<img src="${image_url}" class="w-25">`;
});

const alertType = (type, text) => {
  alertBox.innerHTML = `<div class="alert alert-${type}" role="alert"> ${text} </div>`;
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const fd = new FormData(form);
  fd.append('csrfmiddlewaretoken', csrf);
  fd.append('name', name.value);
  fd.append('description', description.value);
  fd.append('image', image.files[0]);

  $.ajax({
    type: 'POST',
    url: url,
    enctype: 'multipart/form-data',
    data: fd,
    success: function (response) {
      alertType('success', `successfully save ${response.name}`);
      setTimeout(() => {
        alertBox.innerHTML = '';
        imageBox.innerHTML = '';
        name.value = '';
        description.value = '';
        image.value = '';
      }, 2000);
    },
    error: function (error) {
      alertType('danger', 'Ups...! something went wrong!!! ');
    },
    cache: false,
    contentType: false,
    processData: false,
  });
});
