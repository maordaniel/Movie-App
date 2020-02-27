import React, {useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';
import AppBox from '../component/AppBox';
import styles from '../styles/AppStyle'
import axios from 'axios';
import {Avatar, SocialIcon,Button} from "react-native-elements";
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import {connect} from 'react-redux';
import {login, logout, username, userPic} from '../redux/actions/auth_actions';


function HomeScreen (props) {
  const {navigate} = props.navigation;

  useEffect(()=>{
    GoogleSignin.configure({
    webClientId: '846541728184-caou1c2rkci4rilpq0hfdouhfo4gvskq.apps.googleusercontent.com',
    offlineAccess: false,
  });
    },[]);

  const GoogleSignInUser = async () => {
      try {
        await GoogleSignin.hasPlayServices( );
          const userInfo = await GoogleSignin.signIn();
          props.username(userInfo.user.name);
          props.userPic(userInfo.user.photo);
          props.login();
          // console.log('User Details', JSON.stringify(userInfo.user))
      } catch (error) {
          console.log(error);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
  };

  const loginFacebook = () =>{
      LoginManager.logInWithPermissions(["public_profile"]).then(
          function(result) {
              if (result.isCancelled) {
                  console.log("Login cancelled");
              } else {
                  AccessToken.getCurrentAccessToken().then(
                  async(data) => {
                  const userInfo = await axios.get(
                      'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token='+
                  data.accessToken.toString());
                  props.username(userInfo.data.name);
                  console.log(userInfo.data.id);
                  const userPicture = await axios.get(`https://graph.facebook.com/${userInfo.data.id}/picture?type=square&redirect=false`);
                  props.userPic(userPicture.data.data.url);
                  props.login();
                  }
                );
              }
          },
          function(error) {
              console.log("Login fail with error: " + error);
          }
      );
  };

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.screen} >
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{width:'100%'}}>
                <Text style={styles.h1}>
                    Welcome {props.auth.username ? props.auth.username : "Stranger!"}
                </Text>
            </View>
            {props.auth.userPic ?
                <Image
                style={{width: 100, height: 100}}
                source={{uri:props.auth.userPic}}
                />:
                <Avatar size='xlarge' rounded icon={{ name: 'user', type: 'font-awesome', size: 100 }}/>}
            {props.auth.isLogged ?
            <TouchableOpacity style={{alignItems:'center', margin:10, top:'10%'}} onPress={()=> navigate('Movies')}>
                <AppBox stl={{width:300, backgroundColor:'black'}}>
                    <Text style={{textAlign:'center', color:'#FFF', fontSize:16}}>
                        Movie List
                    </Text>
                </AppBox>
            </TouchableOpacity>:
                <Text style={{...styles.h3, width:'55%', margin:10, color:'gray', textAlign:'center'}}>
                    Please log in to continue to the awesomeness.
                </Text>
            }
        </View>
        {!props.auth.isLogged ?
        <View style={{marginBottom:20, flexDirection:'row', justifyContent:'center'}}>
            <SocialIcon
             fontStyle={{fontSize:12}}
              style={{borderRadius:10, width:'46%',}}
              title='Sign In With Google'
              button
              type='google'
              onPress={GoogleSignInUser}
            />
            <SocialIcon
              fontStyle={{fontSize:12}}
              style={{borderRadius:10, width:'46%'}}
              title='Sign In With Facebook'
              button
              type='facebook'
              onPress={loginFacebook}
            />
        </View>:
        <Button buttonStyle={{
              backgroundColor:'red'
            }} title={'Logout'} onPress={()=> props.logout()}/>}
    </SafeAreaView>
    </>
    );
}

const mapStateToProps = state => {
    return{
        auth: state.auth_reducers
    }
};

export default connect(mapStateToProps,
    {login,
    username,
    logout,
    userPic
    })(HomeScreen);

