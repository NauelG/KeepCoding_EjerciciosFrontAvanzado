
import MessageService from 'services/message-service';
import { reportValidity, getFormData } from 'utils/utils';

const addCustomValidation = (input) => {
  if (input.value === input.value.toUpperCase()) {
    input.setCustomValidity('No introduzcas todo el texto en mayúsculas');
  } else {
    input.setCustomValidity('');
  }
};

const addErrorClass = (input) => {
  if (!input.checkValidity()) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
};

const handleValidation = (formInputs) => {
  for (let i = 0; i < formInputs.length; i += 1) {
    const input = formInputs[i];

    input.addEventListener('focus', () => {
      input.classList.add('focus');
    });

    input.addEventListener('blur', () => {
      input.classList.remove('focus');
      addCustomValidation(input);
      addErrorClass(input);
    });
  }
};

export const updateContactForm = () => {
  const contactForm = document.getElementById('contact-form');
  const submitFormButton = document.getElementById('contact-form-submit');
  const formInputs = contactForm.getElementsByClassName('contact-input');
  const notice = document.getElementById('notice');

  handleValidation(formInputs);

  submitFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitFormButton.disable = true;
    reportValidity(contactForm);
    if (contactForm.checkValidity()) {
      const MessageServiceInstance = new MessageService();
      MessageServiceInstance.postMessage(getFormData(formInputs)).then(
        (response) => {
          if (response === true) {
            notice.innerHTML = 'Your message has been sent';
          }
        }
      );
      submitFormButton.disable = false;
    }
  });
};

export default updateContactForm;
