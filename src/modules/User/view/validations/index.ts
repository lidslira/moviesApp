import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Muito pequeno')
    .max(20, 'Muito longo')
    .required('This field is required')
    .label('Nome'),
  email: Yup.string().email('Email inválido').required().label('Email'),
  birthDate: Yup.string().required().label('Data de nascimento'),
  country: Yup.string().label('País'),
  imageProfile: Yup.string().label('Image'),
});

export default validationSchema;
