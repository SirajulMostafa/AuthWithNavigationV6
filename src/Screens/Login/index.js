
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';

import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  // TextInput,
  Button,
  ScrollView,
  // HelperText,
} from 'react-native';

import {TextInput as MetarialTextInput,HelperText} from 'react-native-paper';
import { AuthContext } from '../../Helpers/Auth/AuthContext';
import {validEmail, validPassword} from './RegExp';
//import { AuthContext } from '../../Helpers/auth/AuthContext';
export default class index extends Component {
  static contextType = AuthContext
  constructor(props) {
    super(props);
    this.state = {
      emailError: false,
      emailValue: '',
      passwordError: false,
      passwordValue: '',
      isSecurePassword:true,
      
    };
    AsyncStorage.setItem('@userToken','')//to unset user token test perpose
   
  }
  
   loginButtonHandler = () => {
    console.log('clicked');
    if (this.state.emailValue == '') {
      console.log('email is null');
      this.setState({
        emailError: true,
      });
    } else {
      console.log('else');
      this.setState({
        emailError: false,
      });
    }

    if (this.state.passwordValue == '') {
      this.setState({
        passwordError: true,
      });
    } else {
      this.setState({
        passwordError: false,
      });
    }
    if(!this.state.emailError 
      && !this.state.passwordError
      ){
        
       this.context.signIn(this.state.emailValue,this.state.passwordValue)
        AsyncStorage.setItem('@userToken','123456asd')
    }
  };

  isValidPassword = val => {
    if (validPassword.test(val) === false) {
      // return 'Invalid  Address';
      this.setState({
        passwordError: true,
      });
    } else {
      this.setState({
        passwordError: false,
      });
    }
  };

  emailValueChanged = text => {
    console.log('email vaule is ......', text);
    this.setState({
      emailValue: text,
    });
    this.isValiEmail(text);
  };

  isValiEmail = email => {
    if (validEmail.test(email) === false) {
      // return 'Invalid Email Address';
      this.setState({
        emailError: true,
      });
    } else {
      this.setState({
        emailError: false,
      });
    }
  };

  passwordValueChanged = textP => {
    console.log('password vaule is ......', textP);
    this.setState({
      passwordValue: textP,
    });
    this.isValidPassword(textP);
  };

showPassword =()=>{
  console.log(' ......');
  this.setState({
   isSecurePassword: !this.state.isSecurePassword
  })
}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{flex: 1}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '5%',
              }}>
              <Image
                style={{height: 200, width: 200}}
                source={require('../../Images/logo.png')}
              />
              <Text
                style={{
                  color: '#932324',
                  fontSize: 24,
                  marginTop: '5%',
                  fontWeight: '500',
                }}>
                Login system
              </Text>
            </View>
            <View
              style={{marginTop: '5%', marginRight: '5%', marginLeft: '5%'}}>
              <MetarialTextInput
                style={{marginTop: '5%'}}
                label="Email"
                mode="outlined"
                placeholder="Enter Your name"
                error={this.state.emailError}
                value={this.state.emailValue}
                onChangeText={this.emailValueChanged}
              />
              <HelperText type="error" visible={this.state.emailError}>
        Email address is invalid!
      </HelperText>
              <MetarialTextInput
                label="Password"
                mode="outlined"
                secureTextEntry={this.state.isSecurePassword}
                right={<MetarialTextInput.Icon name={this.state.isSecurePassword?'eye':'eye-off'} onPress={this.showPassword} />}
                style={{marginTop: '5%', marginBottom: '5%'}}
                placeholder="password"
                error={this.state.passwordError}
                value={this.state.passwordValue}
                onChangeText={this.passwordValueChanged}
              />
              <HelperText type="error" visible={this.state.passwordError}>
        Password is invalid!
      </HelperText>

              <Button
                icon="camera"
                title="Login"
                mode="contained"
                color="#841584"
                onPress={this.loginButtonHandler}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    // height: 40,
    // // margin: 12,
    // borderWidth: 1,
    // padding: 10,
    // backgroundColor: '#dfdfdf',
    // borderRadius: 5,
    // borderColor: '#fef',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
  },
});
