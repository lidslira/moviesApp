import React, {useState, useContext} from 'react';
import {useDispatch} from 'react-redux';
import {ThemeContext} from 'styled-components';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/core';
import {Alert} from 'react-native';
import validationSchema from './validations';

import {loginAction} from '~/modules/User/store/ducks/actions';

import * as S from './styles';
import Button from '~/shared/components/GlobalButton';
import Input from '~/shared/components/Input';
import Logo from '~/assets/images/logo.png';
import {PROFILE_SCREEN} from '~/shared/constants/routes';

interface DataFormProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {Colors} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const login = (data: DataFormProps) => {
    const email = 'teste@email.com';
    const password = '12345';

    if (data.email === email && data.password === password) {
      dispatch(loginAction(data.email, data.password));
      navigation.navigate(PROFILE_SCREEN);
    } else {
      Alert.alert('Atenção', 'Este usuário não está cadastrado.');
    }
  };

  const {handleSubmit, dirty, handleChange, values, errors} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: login,
    validateOnChange: false,
  });

  return (
    <S.Container>
      <S.ImageArea source={Logo} />
      <S.LoginArea>
        <S.TextTitle> MOVIE TIME </S.TextTitle>
        <Input
          iconLeft="email"
          placeholder="Email"
          placeholderTextColor={Colors.PLACEHOLDER}
          keyboardType="email-address"
          value={values.email}
          onChangeText={handleChange('email')}
          error={errors.email}
        />
        <Input
          iconLeft="lock"
          placeholder="Password"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.password}
          onChangeText={handleChange('password')}
          secureTextEntry={!showPassword}
          actionIconRight={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
          error={errors.password}
        />
        <Button disabled={!dirty} action={handleSubmit} title="LOGIN" />
      </S.LoginArea>
    </S.Container>
  );
};

export default Login;
