import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
    .label('Email')
    .test('', 'Email not registered', (value) => value === 'teste@email.com'),

  password: Yup.string()
    .required()
    .label('Senha')
    .test('', 'Password is incorrect', (value) => value === '12345'),
});

export default validationSchema;
