import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';


export default class TrackingRequest extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      requestedList: [],
    };
    this.requestRef = null;
  }

  getRequestedList = () => {
    this.requestRef = db
      .collection("requestsMade")
      .onSnapshot((snapshot) => {
        var requestedList = snapshot.docs.map((doc) => doc.data());
        this.setState({
          requestedList: requestedList,
        });
      });
  };

  componentDidMount() {
    this.getRequestedList();
  }

  componentWillUnmount() {
  this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.waste_Type}
        subtitle={item.amount_for_waste}
        subtitle = {item.weight}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("RecieverDetails", {
                details: item,
              });
            }}
          >
            <Text style={{ color: "#ffff" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={styles.view}>
        <MyHeader title="Tracking Page" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.requestedList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Requested Collections</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedList}
              renderItem={this.renderItem}
            />
          )}
        </View>
        <TouchableOpacity style = {styles.button} onPress ={()=>{this.props.navigation.navigate('UserRequestScreen')}}>
            <Text>Go to Request Page</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  view:{
    flex: 1,
    backgroundColor: "#fff"
  }
});