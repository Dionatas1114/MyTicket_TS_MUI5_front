import Masks from './Masks';

export default function formatPhoneNumber(phoneNumber: string) {
  let prefix = '';
  phoneNumber.charAt(4) === '9' ? (prefix = '9') : prefix; // eslint-disable-line
  return Masks(phoneNumber, 'phone', prefix);
}
