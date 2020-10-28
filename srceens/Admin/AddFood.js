import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as firebase from 'firebase';
import {List, ListItem} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

//const img = 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      description: '',
      salePrice: '',
      originalPrice: '',
      image: '',
      progress: '',
      response: '',
      uploading: false,
      transfered: 0,
      foods: [],
      errormsg: '',
      downloadURL: '',
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref('/foods')
      .on('value', (querySnapShot) => {
        // console.log(Object.values(querySnapShot.val()))
        if (querySnapShot.val()) {
          this.setState({foods: Object.values(querySnapShot.val())});
        }
      });
  }
  
  addData = () => {
    const {name, description, originalPrice, salePrice} = this.state;

    firebase
      .database()
      .ref('foods/')
      .push()
      .set({
        name: name,
        description: description,
        salePrice: salePrice,
        originalPrice: originalPrice,
        profit: salePrice - originalPrice,
        time: Date.now(),
        imageUrl:this.state.downloadURL
      })
      .then(() => alert('Record Added !'))
      .catch((err) => {
        alert('error', err);
      });
  };

  selectImage = () => {
    ImagePicker.openPicker({
      compressImageQuality: 0.8,
      freeStyleCropEnabled: true,
      loadingLabelText: 'Loading...!',
      cropping: true,
    }).then((response) => {
      this.setState({response: response});
    });
  };


  uploadImage = async () => {
    const response2 = await fetch(this.state.response.path);
    console.log(response2);
    const blob = await response2.blob();

    const uploadTask = firebase
      .storage()
      .ref('/foods/images')
      .child('/image1' + Date.now())
      .put(blob);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        let progress = (
          (snapshot.bytesTransferred / snapshot.totalBytes) *
          100
        ).toFixed(0);
        this.setState({progress: progress});
      },
      (error) => {
        console.log('error with upload: ' + error);
      },
      () => {
        let that = this;
        that.setState({progress: 100});
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.setState({downloadURL: downloadURL})
        });
      },
    );
  };

  render() {
    // console.log(this.state.foods)
    const {name, description, originalPrice, salePrice} = this.state;
    const renderFoods = this.state.foods.map((item) => {
      return (
        <ListItem key={item.time} style={{justifyContent: 'space-between'}}>
          <Text>{item.name}</Text>
          <Image
            source={{uri: item.imageUrl}}
            style={{height: 40, width: 35}}
          />
          <Text>{item.description}</Text>
          <Text>{item.salePrice}</Text>
          <Text>{new Date(item.time).toDateString()}</Text>
        </ListItem>
      );
    });
    return (
      <View style={styles.container}>
        <View>
          <Text> AddFood </Text>
          <TextInput
            value={name}
            placeholder="name"
            onChangeText={(text) => this.setState({name: text})}
          />
          <TextInput
            placeholder="description"
            value={description}
            onChangeText={(text) => this.setState({description: text})}
          />
          <TextInput
            placeholder="sale price"
            value={salePrice}
            onChangeText={(text) => this.setState({salePrice: text})}
          />
          <TextInput
            placeholder=" originalPrice"
            value={originalPrice}
            onChangeText={(text) => this.setState({originalPrice: text})}
          />

          <Text>Profit: {salePrice - originalPrice}</Text>
          <View style={styles.selectimg}>
            <TouchableOpacity onPress={this.selectImage}>
              <Text style={(styles.ttl, {color: '#fff'})}>
                Select Food Image
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            style={styles.addbtn}
            onPress={this.addData}
            color="red"
            title="Add Food"
          />

          <Button
            style={styles.addbtn}
            onPress={this.uploadImage}
            color="red"
            title="Upload"
          />

          {/* <Image source={{uri}} /> */}
        </View>

        {/* <View>
        <List>
        <ListItem style={{justifyContent:'space-between'}}>
          <Text style={styles.ttl}>Food name</Text>
          <Text style={styles.ttl}> Description</Text>
          <Text style={styles.ttl}>Price</Text>
            <Text style={styles.ttl}>Time </Text>
        </ListItem>
        {renderFoods}

        </List>
      </View> */}
      </View>
    );
  }
}

export default AddFood;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ttl: {
    color: 'blue',
    fontSize: 15,
    fontWeight: '700',
  },
  selectimg: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderBottomEndRadius: 10,
    borderTopLeftRadius: 10,
    marginHorizontal: 100,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  progressBarContainer: {
    marginTop: 10,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
});
