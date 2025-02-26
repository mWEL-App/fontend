import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import theme from '../theme'
import { useFonts, Roboto_700Bold_Italic  } from '@expo-google-fonts/roboto'
import { Inter_700Bold } from '@expo-google-fonts/inter'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_300Light } from '@expo-google-fonts/poppins'

import { Formik } from 'formik'
import * as Yup from 'yup'

import AntDesign from '@expo/vector-icons/AntDesign';
import { SimpleLineIcons } from '@expo/vector-icons'


const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email().label("Email"),
    password: Yup.string()
        .required("Password is required")
        .min(4)
        .label("Password"),
});

const Login = () => {
    const [fontsLoaded, fontError] = useFonts({
            Roboto_700Bold_Italic, Inter_700Bold, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium
        });
    if(!fontsLoaded && fontError){
        return(null);
    }

    const [secureEntry, setSecureEntry] = useState(true)

    const router = useRouter();
   
    const handleGoBack = () => {
        router.back()
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.backButtonWrapperView}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Ionicons name="arrow-back-outline" size={32} color={theme.colors.primary} />
            </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textHeading}>
                Hey,
            </Text>
            <Text style={styles.textHeading}>
                Welcome
            </Text>
            <Text style={styles.textHeading}>
                Back
            </Text>
        </View>
        <View>
            {/*form:-  Formik configuration */}
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>{
                console.log("values", values)
                
            } }
            validationSchema={validationSchema}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched,}) => (
                <View style={styles.formContainer}>
                    {/* EMail */}
                    <View style={styles.inputContainer}>
                        <Ionicons name='mail-outline' size={30} color={theme.colors.secondary}></Ionicons>
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
                    {/* Password */}
                    <View style={styles.inputContainer}>
                        <SimpleLineIcons name='lock' size={30} color={theme.colors.secondary}></SimpleLineIcons>
                        <TextInput style={styles.textInput}
                            placeholder='Enter Your Password'
                            placeholderTextColor={theme.colors.secondary}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            secureTextEntry={secureEntry}
                        />
                        <TouchableOpacity onPress={()=> {
                            setSecureEntry((prev) => !prev)
                        }}>
                            <SimpleLineIcons name='eye' size={20} color={theme.colors.secondary}></SimpleLineIcons>
                        </TouchableOpacity>
                        
                    </View>  
                    {/* Error */}
                    {errors.password && touched.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                    {/* Forgoten password link */}
                    <View style={styles.textForgorPasswordContainer}>
                        <TouchableOpacity>
                            <Text style={styles.textForgotPassword}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* Login btn */}
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.loginButtonWrapper}
                    >
                          <Text style={styles.loginButtonText}>Login</Text> 
                    </TouchableOpacity>
                    <Text style={styles.continueText}>
                        or Continue with
                    </Text>
                    <TouchableOpacity style={styles.googleButtonContainer} onPress={()=> {
                        
                    }}>
                        <Image source={require("../../assets/images/google.png")} style={styles.googleImage} />
                        <Text style={styles.googleText}>
                            Google
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.footerContainer}>
                        <Text style={styles.dontHaveAccountText}>Don't have an account</Text>
                        <Text style={styles.footerSignup}><Link href={"/auth/signup"}>Sign up</Link></Text>
                    </View>
                </View>
            )}
        </Formik>
        </View>
        
        
      </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        padding:20,
    },
    backButtonWrapperView: {
        // padding: 30,
        paddingLeft: 10,
        marginVertical: 28,
    },
    backButtonWrapper: {
        height:40,
        width: 40,
        backgroundColor: theme.colors.grey,
        borderRadius: 20,
       justifyContent: 'center',
       alignContent: 'center',

    },
    textContainer: {
        marginVertical: 2,
        paddingLeft: 10,
    },
    textHeading: {
        fontSize: 28,
        color: theme.colors.primary,
        fontFamily: 'Poppins_600SemiBold',
    },
    formContainer: {
        paddingLeft: 20,
      },
    inputContainer: {
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Poppins_300Light',

    },
    textForgorPasswordContainer: {
        marginVertical: 10,
    },
    textForgotPassword: {
        textAlign: 'right',
        color: theme.colors.primary,
        fontFamily: 'Poppins_600SemiBold',
       
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
    continueText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: theme.colors.primary,
    }, 
    googleButtonContainer: {
        height: 55,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: theme.colors.primary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    googleImage: {
        height: 20,
        width: 20,
    },
    googleText: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: theme.colors.secondary,
        padding: 10,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        gap: 5,
    },
    dontHaveAccountText: {
        color: theme.colors.primary,
        fontFamily: 'Poppins_400Regular',
    },
    footerSignup:{
        color: theme.colors.primary,
        fontFamily: 'Poppins_600SemiBold',
    },
});