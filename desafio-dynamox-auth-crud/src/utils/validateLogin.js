const validateCredentials = ({ email, password }) => {
  const MIN_PASSWORD_LENGTH = 5;
  const emailRegex = /\S+@\S+\.\S+/;
  const emailValidation = !emailRegex.test(email);
  const pwdAllowed = password.length < MIN_PASSWORD_LENGTH;
  return emailValidation || pwdAllowed;
};
export default validateCredentials;
