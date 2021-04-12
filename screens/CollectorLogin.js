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

import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";

export default class CollectorLogin extends Component {
    constructor() {
        super();
        this.state = {
          emailId: "",
          password: "",
          CompanyName: "",
          lastName: "",
          address: "",
          contact: "",
          pincode:"",
          confirmPassword: "",
          isModalVisible: "false",
          isModalVisibleForCollector: "false",
          PickupDays:"",
        };
    }

    showModalForCollectors = () => {
        return (
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.isModalVisible}
          >
            <ScrollView style={styles.scrollview}>
              <View style={styles.signupView}>
                <Text style={styles.signupText}> SIGN UP </Text>
              </View>
              <View style={{ flex: 0.95 }}>
                <Text style={styles.label}>Company Name </Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"First Name"}
                  maxLength={12}
                  onChangeText={text => {
                    this.setState({
                      CompanyName: text
                    });
                  }}
                />
    
            
    
                <Text style={styles.label}>Contact </Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Contact"}
                  maxLength={10}
                  keyboardType={"numeric"}
                  onChangeText={text => {
                    this.setState({
                      contact: text
                    });
                  }}
                />
    
    
                <Text style={styles.label}> Address </Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Address"}
                  multiline={true}
                  onChangeText={text => {
                    this.setState({
                      address: text
                    });
                  }}
                />
    
                <Text style={styles.label}>Pincode </Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Pincode"}
                  maxLength={6}
                  keyboardType={"numeric"}
                  onChangeText={text => {
                    this.setState({
                        pincode: text
                    });
                  }}
                />
    
                <Text style={styles.label}>Email </Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Email"}
                  keyboardType={"email-address"}
                  onChangeText={text => {
                    this.setState({
                      emailId: text
                    });
                  }}
                />
    
                <Text style={styles.label}> Password </Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Password"}
                  secureTextEntry={true}
                  onChangeText={text => {
                    this.setState({
                      password: text
                    });
                  }}
                />
    
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Confrim Password"}
                  secureTextEntry={true}
                  onChangeText={text => {
                    this.setState({
                      confirmPassword: text
                    });
                  }}
                />

                <Text style={styles.label}>Pickup Days</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder={"Pickyp Days"}
                  secureTextEntry={true}
                  onChangeText={text => {
                    this.setState({
                      PickupDays: text
                    });
                  }}
                />
              </View>
    
              <View style={{ flex: 0.2, alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword
                    )
                  }
                >
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
                <Text
                  style={styles.cancelButtonText}
                  onPress={() => {
                    this.setState({ isModalVisible: false });
                  }}
                >
                  Cancel
                </Text>
              </View>
            </ScrollView>
          </Modal>
        );
      };

}


//////////////////////////////////////////


showModalForCollectors = () => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.isModalVisible}
    >
      <ScrollView style={styles.scrollview}>
        <View style={styles.signupView}>
          <Text style={styles.signupText}> SIGN UP </Text>
        </View>
        <View style={{ flex: 0.95 }}>
          <Text style={styles.label}>Company Name </Text>
          <TextInput
            style={styles.formInput}
            placeholder={"First Name"}
            maxLength={12}
            onChangeText={text => {
              this.setState({
                CompanyName: text
              });
            }}
          />

          <Text style={styles.label}>Contact </Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Contact"}
            maxLength={10}
            keyboardType={"numeric"}
            onChangeText={text => {
              this.setState({
                contact: text
              });
            }}
          />


          <Text style={styles.label}> Address </Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Address"}
            multiline={true}
            onChangeText={text => {
              this.setState({
                address: text
              });
            }}
          />

          <Text style={styles.label}>Pincode </Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Pincode"}
            maxLength={6}
            keyboardType={"numeric"}
            onChangeText={text => {
              this.setState({
                  pincode: text
              });
            }}
          />

          <Text style={styles.label}>Email </Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Email"}
            keyboardType={"email-address"}
            onChangeText={text => {
              this.setState({
                emailId: text
              });
            }}
          />

          <Text style={styles.label}> Password </Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Password"}
            secureTextEntry={true}
            onChangeText={text => {
              this.setState({
                password: text
              });
            }}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Confrim Password"}
            secureTextEntry={true}
            onChangeText={text => {
              this.setState({
                confirmPassword: text
              });
            }}
          />

          <Text style={styles.label}>Pickup Days</Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Pickyp Days"}
            secureTextEntry={true}
            onChangeText={text => {
              this.setState({
                PickupDays: text
              });
            }}
          />
        </View>

        <View style={{ flex: 0.2, alignItems: "center" }}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() =>
              this.collectorSignUp(
                this.state.emailId,
                this.state.password,
                this.state.confirmPassword
              )
            }
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <Text
            style={styles.cancelButtonText}
            onPress={() => {
              this.setState({ isModalVisibleForCollector: false });
            }}
          >
            Cancel
          </Text>
        </View>
      </ScrollView>
    </Modal>
  );
};
