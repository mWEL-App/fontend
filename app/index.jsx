import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { useFonts, Roboto_700Bold_Italic  } from '@expo-google-fonts/roboto'
import { Inter_700Bold } from '@expo-google-fonts/inter'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'

import theme from './theme'


const Home = () => {
    const [fontsLoaded, fontError] = useFonts({
        Roboto_700Bold_Italic, Inter_700Bold, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium
    })

    if(!fontsLoaded && fontError){
        return(null);
    }

    const router = useRouter();
    
  return (
    <SafeAreaView style={styles.container}>
        
        <Text style={styles.textMain}>
            {/* empty text place holder */}
        </Text>
        <Image source={require("../assets/images/mWELround-logo.png")} styles={styles.logo} />
        <Text style={styles.title}>
            mHealth Toolkit for Promoting Mental Wellbeing and Empower Lives (mWEL) 
        </Text>
        <Text style={styles.subTitle}>
            Learning More about My Own Wellness
        </Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.buttonWrapper, { backgroundColor: theme.colors.primary,}]}
                onPress={()=> router.push("/auth/login")}
            >
                <Text style={styles.loginButtonText}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity style={[styles.buttonWrapper, { backgroundColor: theme.colors.white,}]}
            onPress={()=> router.push("/auth/signup")}
           >
                <Text style={styles.registerButtonText}>Sign-Up</Text>
           </TouchableOpacity>
        </View>

       
       
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
    },
    logo: {
        height: 250,
        width: 250,       
    },
    textMain: {
        // fontSize: 30,
        // color: theme.colors.primary,
        // fontWeight: 'bold',
        // fontFamily: "Poppins_400Regular",
        // marginVertical: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.primary,
        fontFamily: "Poppins_600SemiBold",
        padding: 10,
        textAlign: 'center',
        marginTop: 10,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.secondary,
        fontFamily: "Poppins_500Medium",
        padding: 10,
        textAlign: 'center',
        marginTop: 10,
        marginVertical: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        width: '80%',
        height: 60,
        borderRadius: 100,
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '50%',
        borderRadius: 98,
        
    },
    loginButtonText: {
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        color: theme.colors.white,
        textAlign: 'center',

    },
    registerButtonText: {
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',

    },
    
})