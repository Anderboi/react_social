// const required =

export const required = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

export const maxLengthCreator = (number) => (value) => {
  if (value.length > number) return `Max lenngth is ${number} symbols`;
  return undefined;
};
