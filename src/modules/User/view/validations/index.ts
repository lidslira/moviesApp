import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Muito pequeno')
    .max(20, 'Muito longo')
    .required()
    .label('Nome completo'),
  email: Yup.string().email('Email inválido').required().label('Email'),
  birthDate: Yup.string()
    .required()
    .label('Data de nascimento')
    .test('', 'Você é menor de idade', (birthDate) => {
      if (!birthDate) return false;
      const date = new Date(birthDate);
      const now = new Date();

      return now.getFullYear() - date.getFullYear() < 18;
    }),
  country: Yup.string().label('País'),
  imageProfile: Yup.string().label('Image'),
});

export default validationSchema;
