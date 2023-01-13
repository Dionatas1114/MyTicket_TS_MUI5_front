export default function formatPhoneNumber(phoneNumber: string) {
  let prefix = '';
  phoneNumber.charAt(4) === '9' ? (prefix = '9') : prefix; // eslint-disable-line
  return phoneNumber.replace(/^(\d{2})(\d{2})(\d{4})(\d{4})/, `($2) ${prefix}$3-$4`);
}
