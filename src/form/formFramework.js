export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: "",
    placeholder: "Enter something...",
  };
}

export function validate(value, rules = null) {
  if (!rules) {
    return true;
  }
  let isValid = true;

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  return isValid;
}

export function validateForm(formControls) {
  console.log(formControls);
  let isFormValid = true;

  Object.keys(formControls).forEach((name) => {
    isFormValid = formControls[name].valid && isFormValid;
  });

  return isFormValid;
}
