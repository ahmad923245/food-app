import React, {Component} from 'react';
import {View, ScrollView,Text,Image} from 'react-native';
import * as firebase from 'firebase';
import { Container, Header, Content, Card,Item,Input, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      foods:[]
    };
  }
  
  componentDidMount() {
   
    this.getDataFromApi()
    this.unsubcribeAuth = firebase.auth().onAuthStateChanged((user) => {
     
      if (user) {
        this.setState({email: user.email});
      } else {
        this.props.navigation.replace('Login');
      }
    });
  }

  getDataFromApi=()=>{
      firebase
        .database()
        .ref('/foods')
        .on('value', (querySnapShot) => {
          // console.log(Object.values(querySnapShot.val()))
          if (querySnapShot.val()) {
            this.setState({foods:Object.values(querySnapShot.val())});
          }
        });
 

  }

  componentWillUnmount(){
    this.unsubcribeAuth()
  }

  UserSignOut(){
    firebase.auth().signOut()
    .then(()=>alert('Signout Successfully'))
    .catch((err)=>alert(err))
  }

  render() {
   const {foods} = this.state
   console.log(foods)

    const renderFoods = foods.map((item,index) => {
      return(<Card key={index} >
        <CardItem>
          <Left>
            <Thumbnail source={{uri:item.imageUrl}} />
            <Body>
      <Text>{item.name}</Text>
              <Text note>{new Date(item.time).toDateString()}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: item.imageUrl}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>75 Minimum</Text>
            </Button>
          </Left>
          <Body>
           
              <Icon active name="chatbubbles" />
              <Text>{item.salePrice}</Text>
            
          </Body>
          <Right>
            <Text>20:Delivery Fee</Text>
          </Right>
        </CardItem>
      </Card>

      )
    })
    const {email} = this.state;
    return (
      <ScrollView>
         <Header searchBar rounded style={{backgroundColor:'#8F2209'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
    
       
         {renderFoods}
        <Button
        onPress={this.UserSignOut}
        >
          <Text>Log out</Text>
        </Button>
        <View style={{marginLeft:100}}>
          <Button
          onPress={()=>this.props.navigation.navigate('AddFood')}
          >
            <Text>Add Food</Text>
          </Button>
    


        </View>

        
      </ScrollView>
    );
  }
}

export default Home;
