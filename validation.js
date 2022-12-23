document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.Contact-Form');
  const errorMessage = document.querySelector('#message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    errorMessage.classList.replace('validationError', 'validationNoerror');
    const mail = form.elements.email.value;
    if (mail === mail.toLowerCase()) {
      form.submit();
      errorMessage.classList.replace('validationError', 'validationNoerror');
    } else {
      errorMessage.classList.replace('validationNoerror', 'validationError');
    }
  });
});
