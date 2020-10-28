import React, {Component} from 'react';
import {Text,ImageBackground, View,Dimensions,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {
  Button,
  Item,
  Input,
  Label,
} from 'native-base';
import * as firebase from 'firebase'
const img = "https://pakistanijunction.com/wp-content/uploads/2013/10/foodclub-logo.jpg"
const bgimg = 'https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png'
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email:'',
      Password:'',
      PhoneNumber:''
    };
  }
  handleLogin=()=>{

    const {Email,Password}= this.state;
    
    if(Email && Password==''){
      alert('Please fill All fileds..!')
    }else{
      firebase.auth().signInWithEmailAndPassword(Email,Password)
      .then((res)=>{alert('successfully login')})
      .catch((err)=>alert(err))

    }


  }
  render() {
    const {Email,Password} = this.state;
    return (

      <View style={styles.container}>
        <View>
          <Image
          style={styles.logoImg}
           source={{uri:img}}
           resizeMode="contain"
          />
        </View>
        {/* <Text> SignUp </Text> */}
        <View style={styles.input}>

        <Item floatingLabel>
          <Label>Email Address</Label>
          <Input
            value={Email}
            onChangeText={(text)=>this.setState({Email:text})}
            keyboardType="email-address"
          />
        </Item> 
        </View>
        <View style={styles.input}>
          
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
           onChangeText={(text)=>this.setState({Password:text})}
          secureTextEntry={true}
          value={Password}
          />
        </Item>
        </View>
        <Button full rounded danger onPress={this.handleLogin}>
                <Text style={styles.btnText} >Login</Text>
            </Button>
        <TouchableOpacity style={styles.already} onPress={()=>this.props.navigation.navigate('SignUp')}>
          <Text>Already Have an Account ?
            <Text style={{color:'#8F2209',left:20}}> Signup Here</Text>
             </Text>
        </TouchableOpacity>

      </View>
    
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    padding:20,
    marginTop:10
  },
  logoImg:{
    paddingLeft:300,
    height:50,
    width:150
  },
  input:{
    marginVertical:20
  },
  btnText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'600',
    fontFamily:'Didot'
  },
  already:{
    marginVertical:25,
    marginLeft:10

  },

})