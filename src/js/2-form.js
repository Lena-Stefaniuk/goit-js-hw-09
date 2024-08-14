const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const fillFormField = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDataFromLS === null) {
    return;
  }
  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormField();

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
};
feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
