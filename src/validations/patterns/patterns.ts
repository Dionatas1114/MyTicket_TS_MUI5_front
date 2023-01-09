import rules from './rules';

const { userNameMinLength, userNameMaxLength, passwMinLength, passwMaxLength, phoneLength } = rules;

const patterns: StringElements = {
  userName:
    "(?i)(^[a-z])((?![? .,'-]$)[ .]?[a-z]){" + userNameMinLength + ',' + userNameMaxLength + '}$',
  email:
    "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
  password:
    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{" +
    passwMinLength +
    ',' +
    passwMaxLength +
    '}$',
  phone: '^\\d{' + phoneLength + '}$',
};

export default patterns;
