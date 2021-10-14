import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Too short')
    .max(20, 'Too long')
    .required()
    .label('Full Name'),
  email: Yup.string().email('Email inválido').required().label('Email'),
  birthDate: Yup.string().required().label('Birth Date'),
  // .test('age', 'You must be 18 or older', (birthDate) => {
  //   const date = new Date(birthDate);
  //   const now = new Date();

  //   return now.getFullYear() - date.getFullYear() < 18;
  // }),
  country: Yup.string().label('País'),
  imageProfile: Yup.string().label('Image'),
});

export default validationSchema;
