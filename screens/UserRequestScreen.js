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

import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class UserRequestScreen extends Component{
    constructor(){
      super();
      this.state ={
        userId : firebase.auth().currentUser.email,
        wasteType:"",
        amount:"",
        weight:'',
      }
    }
  
    createUniqueId(){
      return Math.random().toString(36).substring(7);
    }
  
  
  
    addRequest =(wasteType,amount,weight)=>{
      var userId = this.state.userId
      var randomRequestId = this.createUniqueId()

      db.collection('requestsMade').add({
          "user_id": userId,
          "waste_Type":wasteType,
          "amount_for_waste":amount,
          "weight": weight,
          "request_id"  : randomRequestId,
          
      })
  
      this.setState({
          wasteType :'',
          reasonToRequest : '',
          weight:''

      })
  
      return alert("Collection Request for "+ this.state.wasteType+  " added Successfully")
    }
  
  
    render(){
      return(
          <View style={{flex:1}}>
            <MyHeader title="Request Waste Collection" navigation ={this.props.navigation}/>
              <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput
                  style ={styles.formTextInput}
                  placeholder={"Enter the category of waste"}
                  onChangeText={(text)=>{
                      this.setState({
                          wasteType:text
                      })
                  }}
                  value={this.state.wasteType}
                />
                <TextInput
                  style ={styles.formTextInput}
                  placeholder={"Enter the rough weight of the waste in kgs"}
                  onChangeText={(text)=>{
                      this.setState({
                          weight:text
                      })
                  }}
                  value={this.state.weight}
                />
                <TextInput
                  style ={[styles.formTextInput,{height:300}]}
                  multiline
                  numberOfLines ={8}
                  placeholder={"Rough quote for the collectors"}
                  onChangeText ={(text)=>{
                      this.setState({
                          amount:text
                      })
                  }}
                  value ={this.state.amount}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{this.addRequest(this.state.wasteType,this.state.amount, this.state.weight)}}
                  >
                  <Text>Request</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}
                  onPress ={()=>{this.props.navigation.navigate("TrackingRequest")}}
                >
                    <Text>Tracking Page</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
          </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )