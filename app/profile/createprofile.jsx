import { StyleSheet, Text, View , ScrollView, TextInput, TouchableOpacity,} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState} from 'react'

import { useFonts, Roboto_700Bold_Italic  } from '@expo-google-fonts/roboto'
import { Inter_700Bold } from '@expo-google-fonts/inter'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_300Light } from '@expo-google-fonts/poppins'
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup'
// import DatePicker from "react-datepicker";
// import DateTimePicker from '@react-native-community/datetimepicker';



import theme from '../theme';

import Checkbox from 'expo-checkbox';
import {Picker} from '@react-native-picker/picker';


const validationSchema = Yup.object().shape({
    
});


const CreateProfile = () => {

  const [fontsLoaded, fontError] = useFonts({
              Roboto_700Bold_Italic, Inter_700Bold, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium
          });
      if(!fontsLoaded && fontError){
          return(null);
      }
  
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
      <Text style={styles.textHeading}>Create Profile</Text>
     <View>
      {/* Formik configurations */}
      <Formik
            initialValues={{ date: '' }}
            onSubmit={(values) =>{
              alert(JSON.stringify(values));
                
            } }
            validationSchema={validationSchema}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched, onDateChange}) => (
                <View style={styles.formContainer}>
                  {/* First Name */}
                  <View style={styles.formFieldContainer}>
                    <Text>First Name</Text>
                    <View style={styles.inputContainer}>
                          <TextInput style={styles.textInput}
                              placeholder=''
                              placeholderTextColor={theme.colors.secondary}
                              onChangeText={handleChange("firstName")}
                              onBlur={handleBlur("firstName")}
                              value={values.firstName}
                              keyboardType='text'
                          />
                      </View>
                    
                      {/* Error */}
                      {errors.firstName && touched.firstName && (
                          <Text style={styles.errorText}>{errors.firstName}</Text>
                      )}
                  </View>
                  {/* Other Names */}
                  <View style={styles.formFieldContainer}>
                    <Text>Other Names</Text>
                    <View style={styles.inputContainer}>
                          <TextInput style={styles.textInput}
                              placeholder=''
                              placeholderTextColor={theme.colors.secondary}
                              onChangeText={handleChange("otherName")}
                              onBlur={handleBlur("otherName")}
                              value={values.otherName}
                              keyboardType='text'
                          />
                      </View>
                    
                      {/* Error */}
                      {errors.otherName && touched.otherName && (
                          <Text style={styles.errorText}>{errors.otherName}</Text>
                      )}
                  </View>
                  {/* Date of Birth */}
                  <View style={styles.formFieldContainer}>
                    <Text>Date Of Birth</Text>
                    <View style={styles.inputContainer}>
                    
                      </View>
                    
                      {/* Error */}
                      {errors.otherName && touched.otherName && (
                          <Text style={styles.errorText}>{errors.otherName}</Text>
                      )}
                  </View>
                  {/* Gender */}
                  
                    {/* EMail */}
                    <View style={styles.inputContainer}>
                    <Text>Email Address</Text>
                        <TextInput style={styles.textInput}
                            placeholder='Enter Your Email'
                            placeholderTextColor={theme.colors.secondary}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            keyboardType='email-address'
                        />
                    </View>
                   
                    {/* Error */}
                    {errors.email && touched.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                   
                    {/* Login btn */}
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.loginButtonWrapper}
                    >
                          <Text style={styles.loginButtonText}>Create Profile</Text> 
                    </TouchableOpacity>
                    
                </View>
            )}
        </Formik>
     </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  scrollViewContainer: {
    flex: 1,
  },
  textHeading: {
    fontSize: 28,
    color: theme.colors.primary,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',

  },
  datebox:{
    alignSelf:'center',
    height:50,
    width:500,
    },
  formContainer: {
    paddingLeft: 20,
  },
  formFieldContainer: {
    borderBottomWidth: 1,
    paddingTop: 4,
  },
  inputContainer: {
      borderColor: theme.colors.secondary,
      borderWidth: 1,
      borderRadius: 100,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
  },
  formItemContainer: {
      borderColor: theme.colors.secondary,
      borderWidth: 1,
      borderRadius: 100,
      paddingHorizontal: 20,
      flexDirection: 'column',
      alignItems: 'left',
      padding: 2,
      marginVertical: 10,
  },
  textInput: {
      flex: 1,
      paddingHorizontal: 10,
      fontFamily: 'Poppins_300Light',

  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
  successText: {
      color: "green",
      marginBottom: 16,
  },
  loginButtonWrapper: {
      height: 50,
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      
  },
      loginButtonText: {
      color: theme.colors.white,
      fontSize: 20,
      fontFamily: 'Poppins_600SemiBold',
  },
});