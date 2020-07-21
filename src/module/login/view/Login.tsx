import React, { PureComponent } from 'react'
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  TextInput,
} from 'react-native'
import {
  styleSheetCreate,
  style,
  windowWidth,
  Color,
  ImageRepository,
  fonts,
} from 'app/system/helpers'

interface IProps {

}

interface IState {
  isAgreeProcessing: boolean
}

export class Login extends PureComponent<IProps,IState> {

  state = {
    isAgreeProcessing: false
  }

  onChangeDataProcessingHandler = (isAgreeProcessing: boolean): void => {
    this.setState({ isAgreeProcessing })
  }

  render(): JSX.Element {

    return (
      <SafeAreaView style={styles.container}>
{/*        <Image
          source={ImageRepository.loginLogoApplication}
          style={styles.logo}
          resizeMode="contain"
        />*/}
        <Text style={styles.title}>
          Авторизация
        </Text>
        <Text style={styles.subTitle}>
          Введите логин и пароль, {'\n'}
          полученные при регистрации
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.loginInputTitle}>
            Логин
          </Text>
          <TextInput style={styles.input}  />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.passwordInputTitle}>
            Пароль
          </Text>
          <TextInput style={styles.input}  />
        </View>
        <View style={styles.helpers}>
          <View style={styles.accessCode}>
            <Text style={styles.accessCodeText}>
              Есть код доступа?
            </Text>
            <TouchableOpacity>
              <Image
                source={ImageRepository.logoQuestion}
                style={styles.accessCodeHelp}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.forgotPassword}
          >
            <Text style={styles.forgotPasswordText}>
              Забыл пароль?
            </Text>
            <Image
              source={ImageRepository.logoDottedLine}
              style={styles.forgotPasswordDottedLine}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signContainer}>
          <TouchableOpacity style={styles.registrationButton}>
            <Text style={styles.signButtonsText}>
              Регистрация
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.signButtonsText}>
              Войти
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dataProcessing}>
          <Switch
            thumbColor={Color.mediumSeaGreen}
            value={this.state.isAgreeProcessing}
            onValueChange={this.onChangeDataProcessingHandler}
          />
          <Text style={styles.dataProcessingText}>
            Согласен на обработку персональных данных
            и принимаю условия  {' '}
            <Text style={styles.dataProcessingTextUnderline}>
              Политики конфиденциальности.
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: Color.white,
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.06,
    justifyContent: 'center',
  }),
  logo: style.image({
    width: windowWidth * 0.87,
    height: windowWidth * 0.29,
    marginTop: windowWidth * 0.1,
  }),
  title: style.text({
    fontSize: windowWidth * 0.1,
    marginBottom: windowWidth * 0.04,
    fontFamily: fonts.geometriaBold,
  }),
  subTitle: style.text({
    fontSize: windowWidth * 0.048,
    textAlign: 'center',
    fontFamily: fonts.geometriaLight,
    marginBottom: windowWidth * 0.1,
   // lineHeight: windowWidth * 0.073,
  }),
  inputContainer: style.view({
    borderColor: Color.americanSliver,
    borderWidth: windowWidth * 0.0048,
    width: windowWidth * 0.9,
    height: windowWidth * 0.13,
    borderRadius: windowWidth * 0.1,
    marginBottom: windowWidth * 0.085,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  input: style.text({
    width: windowWidth * 0.8,
    height: windowWidth * 0.1,
    fontSize: windowWidth * 0.039,
  }),
  loginInputTitle: style.text({
    position: 'absolute',
    top: -windowWidth * 0.027,
    left: windowWidth * 0.035,
    color: Color.graniteGray,
    fontSize: windowWidth * 0.042,
    width: windowWidth * 0.15,
    backgroundColor: Color.white,
    textAlign: 'center',
    zIndex: 10,
  }),
  passwordInputTitle: style.text({
    position: 'absolute',
    top: -windowWidth * 0.027,
    left: windowWidth * 0.035,
    color: Color.graniteGray,
    fontSize: windowWidth * 0.042,
    width: windowWidth * 0.17,
    backgroundColor: Color.white,
    textAlign: 'center',
    zIndex: 10,
  }),
  helpers: style.view({
    width: windowWidth * 0.88,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowWidth * 0.075,
  }),
  accessCode: style.view({
    flexDirection: 'row',
    alignItems: 'center',
  }),
  accessCodeText: style.text({
    fontSize: windowWidth * 0.044,
    fontFamily: fonts.geometriaLight,
    marginRight: windowWidth * 0.03,
  }),
  accessCodeHelp: style.view({
    width: windowWidth * 0.044,
    height: windowWidth * 0.044,
    marginBottom: windowWidth * 0.02,
  }),
  forgotPassword: style.view({
    width: windowWidth * 0.33,
    marginBottom: windowWidth * 0.01,
  }),
  forgotPasswordText: style.text({
    color: Color.mediumSeaGreen,
    fontFamily: fonts.geometriaLight,
    fontSize: windowWidth * 0.044,
  }),
  forgotPasswordDottedLine: style.view({
    width: '100%',
    height: windowWidth * 0.008,
  }),
  signContainer: style.view({
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowWidth * 0.88,
  }),
  signButtonsText: style.text({
    fontSize: windowWidth * 0.042,
    fontFamily: fonts.geometriaBold,
    color: Color.white,
    marginTop: windowWidth * 0.01,
  }),
  registrationButton: style.view({
    height: windowWidth * 0.13,
    width: windowWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.royalPurple,
    borderRadius: windowWidth * 0.1,
  }),
  loginButton: style.view({
    height: windowWidth * 0.13,
    width: windowWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.mediumSeaGreen,
    borderRadius: windowWidth * 0.1,
  }),
  dataProcessing: style.view({
    marginTop: windowWidth * 0.08,
    width: windowWidth * 0.88,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  dataProcessingText: style.text({
    width: windowWidth * 0.7,
    fontSize: windowWidth * 0.026,
    fontFamily: fonts.openSansRegular,
  }),
  dataProcessingTextUnderline: style.text({
    textDecorationLine: 'underline',
  })
})