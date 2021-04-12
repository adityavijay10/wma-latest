import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView, Image
} from "react-native";
import { ListItem } from 'react-native-elements'
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";

export default class CollectorDetails extends Component {
  renderItem = ({ item, i }) => {
<ListItem
key={i}
title={item.waste_Type}
subtitle={item.pickUp_days}
subtitle = {item.monthly_price}
titleStyle={{ color: "black", fontWeight: "bold" }}

bottomDivider
/>
  }
  getCollectorDetails() {
    db.collection("collectors")
      .where("email_id", "==", this.state.requesterId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            userName: doc.data().first_name,
            userContact: doc.data().contact,
            useraddress: doc.data().address,
          });
        });
      });

  
    }
    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1 }}>
            <Header
              leftComponent={
                <Icon
                  name="arrow-left"
                  type="feather"
                  color="#ffffff"
                  onPress={() => this.props.navigation.goBack()}
                />
              }
              centerComponent={{
                text: "Donate Books",
                style: {
                  color: "#ffffff",
                  fontSize: RFValue(20),
                  fontWeight: "bold",
                },
              }}
              backgroundColor="#32867d"
            />
          </View>
          <View style={{ flex: 0.9 }}>
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                paddingTop: RFValue(30),
                paddingLeft: RFValue(10),
              }}
            >
              <View style={{ flex: 0.4,}}>
                <Image
                  source={{ uri: this.state.bookImage }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View
                style={{
                  flex: 0.6,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: RFValue(25),
                    textAlign: "center",
                  }}
                >
                  {this.state.bookName}
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: RFValue(15),
                    textAlign: "center",
                    marginTop: RFValue(15),
                  }}
                >
                  {this.state.reason_for_requesting}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.7,
                padding: RFValue(20),
              }}
            >
              <View style={{ flex: 0.7 ,justifyContent:'center',alignItems:'center',marginTop:RFValue(50),borderWidth:1,borderColor:'#deeedd',padding:RFValue(10)}}>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: RFValue(30),
                  }}
                >
                  collector Information
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: RFValue(20),
                    marginTop: RFValue(30),
                  }}
                >
                  Name : {this.state.UserName}
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: RFValue(20),
                    marginTop: RFValue(30),
                  }}
                >
                  Contact: {this.state.UserContact}
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: RFValue(20),
                    marginTop: RFValue(30),
                  }}
                >
                  Address: {this.state.address}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {this.state.requesterId !== this.state.userId ? (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.updateBookStatus();
                      this.addNotification();
                    }}
                  >
                    <Text>I want to Collect</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      );
    }
    }