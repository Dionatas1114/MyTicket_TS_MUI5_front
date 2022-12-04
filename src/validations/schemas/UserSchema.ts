import * as Yup from 'yup';
import rules from 'validations/patterns/rules';

import { i18n } from 'translate/i18n';

const { userNameMinLength, userNameMaxLength, passwMinLength, passwMaxLength } = rules;

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(userNameMinLength, i18n.t('validations.user.userNameMinLength'))
    .max(userNameMaxLength, i18n.t('validations.user.userNameMaxLength'))
    .required(i18n.t('validations.user.required'))
    .transform((value) => value.replace(/\D/g, '')),
  password: Yup.string()
    .min(passwMinLength, 'Too Short!')
    .max(passwMaxLength, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default userSchema;
