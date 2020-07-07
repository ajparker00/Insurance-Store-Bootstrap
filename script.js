const submit = document.getElementById('submit');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (event) => {
  let messages = [];
  if (firstName.value === '' || firstName.value == null) {
    messages.push('First Name is required');
  }
  if (lastName.value === '' || lastName.value == null) {
    messages.push('Last Name is required');
  }
  if (email.value === '') {
    alert('Please enter email!');
  }

  if (messages.length > 0) {
    event.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});

// submit.addEventListener('click', (event) => {
//   alert(
//     'Your form has been submitted. Someone will reach out to you within 24hrs to 48hrs!'
//   );
// });
