const submit = document.getElementById('submit');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  if (email.value === '') {
    alert('Please enter email!');
  } else {
    submit.addEventListener('click', (event) => {
      alert(
        'Your form has been submitted. Someone will reach out to you within 24hrs or the next business day!'
      );
    });
  }
  event.preventDefault();
});
