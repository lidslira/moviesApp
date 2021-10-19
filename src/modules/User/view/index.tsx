import React, {useState, useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {useFormik} from 'formik';

import {Alert, Modal, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import validationSchema from './validations';
import {mask} from '~/modules/User/utils/formValidations';

import {
  informationUserAction,
  logoutAction,
} from '~/modules/User/store/ducks/actions';

import Button from '~/shared/components/GlobalButton';
import Input from '~/shared/components/Input';
import ModalCamera from '~/modules/User/components/ModalCamera';
import {Header} from '../../../shared/components/Header';
import {LIST_GENDERS} from '../constants';

import * as S from './styles';
import {ApplicationState} from '~/shared/store';
import {UserProps} from '~/modules/User/store/ducks/types';
import RadioButtonList from '~/modules/User/components/RadioButton/RadioButtonList';

const Profile: React.FC = () => {
  const {Colors} = useContext(ThemeContext);
  const {currentUser} = useSelector((state: ApplicationState) => state.user);

  const dispatch = useDispatch();

  const [showGender, setShowGender] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const saveProfile = (data: UserProps, actions: any) => {
    dispatch(
      informationUserAction({
        fullName: data.fullName,
        birthDate: data.birthDate,
        email: data.email,
        password: data.password,
        country: data.country,
        imageProfile: data.imageProfile,
        gender: data.gender,
      }),
    );
    actions.resetForm({values: data});
    Alert.alert(`Olá ${data.fullName}`, `Suas informações foram salvas!`);
  };

  const {handleSubmit, dirty, handleChange, values, errors, setFieldValue} =
    useFormik({
      initialValues: {
        fullName: currentUser.fullName,
        birthDate: currentUser.birthDate,
        email: currentUser.email,
        password: currentUser.password,
        country: currentUser.country,
        imageProfile: currentUser.imageProfile,
        gender: currentUser.gender,
      },
      validationSchema,
      onSubmit: saveProfile,
      validateOnChange: false,
    });

  const setNewImage = (path: string) => {
    setFieldValue('imageProfile', path);
    setModalIsVisible(false);
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="profile" />
      <S.ProfileContainer>
        <S.ContainerImage>
          <S.Touchable onPress={() => setModalIsVisible(true)}>
            {values.imageProfile ? (
              <S.Image source={{uri: values.imageProfile}} />
            ) : (
              <S.IconPerson />
            )}
            <S.ContainerIcon>
              <S.IconEdit />
            </S.ContainerIcon>
          </S.Touchable>
        </S.ContainerImage>
        <Modal
          transparent
          visible={modalIsVisible}
          onRequestClose={() => setModalIsVisible(true)}>
          <ModalCamera
            closeModal={() => setModalIsVisible(false)}
            setNewImage={setNewImage}
          />
        </Modal>
        <Input
          iconLeft="card-account-details-outline"
          placeholder="Enter your fullname"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.fullName}
          onChangeText={handleChange('fullName')}
          error={errors.fullName}
        />
        <Input
          iconLeft="email"
          placeholder="Enter your email address"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.email}
          onChangeText={handleChange('email')}
          error={errors.email}
        />
        <Input
          iconLeft="calendar"
          placeholder="Enter your birth date"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.birthDate}
          onChangeText={(value) => {
            setFieldValue('birthDate', value ? mask.birthdate(value) : value);
          }}
          error={errors.birthDate}
        />
        <S.ContainerSelect>
          <S.IconSelect name="tooltip-account" />
          <S.Select>
            <S.HeaderSelect>
              <S.GenderSelected>
                {values.gender ? values.gender.label : 'Select your gender'}
              </S.GenderSelected>
              <S.Button onPress={() => setShowGender(!showGender)}>
                <S.IconSelectRight
                  name={showGender ? 'chevron-up' : 'chevron-down'}
                  type="ionicons"
                  iconShow
                />
              </S.Button>
            </S.HeaderSelect>
            {showGender && (
              <RadioButtonList
                selected={values.gender}
                checkRadio={(value) => {
                  setFieldValue('gender', value);
                  setShowGender(false);
                }}
                data={LIST_GENDERS}
              />
            )}
          </S.Select>
        </S.ContainerSelect>
        <Input
          iconLeft="earth"
          placeholder="Enter your address"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={values.country}
          onChangeText={handleChange('country')}
          error={errors.country}
        />
        <S.ButtonContainer>
          <Button disabled={!dirty} action={handleSubmit} title="SAVE" />
          <Button buttonType="outline" action={() => logout()} title="LOGOUT" />
        </S.ButtonContainer>
      </S.ProfileContainer>
    </S.Container>
  );
};
export default Profile;
