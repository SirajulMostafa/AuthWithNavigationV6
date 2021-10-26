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
} from 'react-native';

import {TextInput as MetarialTextInput} from 'react-native-paper';
import { validEmail, validPassword } from './RegExp';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {emailError: false, emailValue: '',passwordError: false, passwordValue: ''};
  }
  loginButtonHandler = () => {
    console.log("clicked")
    if (this.state.emailValue=='') {
      console.log("email is null")
      this.setState({
        emailError:true,
       
      })
      
    } else {
      console.log('else')
      this.setState({
        emailError:false,

      })
    }

    if (this.state.passwordValue=='') {
      this.setState({
        passwordError:true,
      })
    }
      else {
        this.setState({
          passwordError:false,
        })
      }
  
  
  }

 
  isValidPassword=(val) =>{
    
    if (validPassword.test(val)===false) {
      // return 'Invalid  Address';
      this.setState({
        passwordError:true
      })
    }else{
      this.setState({
        passwordError:false
      })
    }
  }

  emailValueChanged = (text)=>{
    console.log("email vaule is ......",text)
    this.setState({
      emailValue:text,
    })
    this.isValiEmail(text)
  }
  isValiEmail=(email) =>{
    // let regEmail =  
    // don't remember from where i copied this code, but this works.
   // let regEmail = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    
    if (validEmail.test(email)===false) {
      // return 'Invalid Email Address';
      this.setState({
        emailError:true
      })
    }else{
      this.setState({
        emailError:false
      })
    }
  }
  passwordValueChanged = (textP)=>{
    console.log("password vaule is ......",textP)
    this.setState({
      passwordValue:textP,
    })
    this.isValidPassword(textP)
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
              <MetarialTextInput
                label="Password"
                mode="outlined"
                secureTextEntry
                // right={<MetarialTextInput.Icon name="eye" />}
                style={{marginTop: '5%', marginBottom: '5%'}}
                placeholder="password"

                error={this.state.passwordError}
                value={this.state.passwordValue}
                onChangeText={this.passwordValueChanged}

              />

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
