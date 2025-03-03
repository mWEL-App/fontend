import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useFonts, Roboto_700Bold_Italic  } from '@expo-google-fonts/roboto'
import { Inter_700Bold } from '@expo-google-fonts/inter'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_300Light } from '@expo-google-fonts/poppins'

import theme from '../theme'
import { Link } from 'expo-router';


const Home = () => {
  const [fontsLoaded, fontError] = useFonts({
              Roboto_700Bold_Italic, Inter_700Bold, Poppins_300Light, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium
          });
  if(!fontsLoaded && fontError){
      return(null);
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.textHeader}>mWEL- Promoting Mental Wellbeing & Empower Lives Toolkit </Text>
        </View>
        <View style={styles.sectionWrapper}>
          <TouchableOpacity  style={styles.topicWrapper}>
            <Text style={styles.topicText}>Consent</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.topicWrapper}>
            <Text style={styles.topicText}>Complete the Baseline Assessment </Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.topicWrapper}>
            <Text style={styles.topicText}>Start the Toolkit</Text>
          </TouchableOpacity>
        </View>
        <View>
            <Text><Link href={"/profile/createprofile"}>Create Profile</Link></Text>
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
        paddingLeft: 10,
        paddingRight: 10,
  },
  textWrapper: {
    marginVertical: 30,
    justifyContent: 'center',
    textAlign: 'center',
    paddingRight: 5,
  },
  textHeader: {
    fontSize: 25,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center'
    
  },
  sectionWrapper: {
    paddingRight: 10,
    marginRight: 10,
    alignContent: 'center',
    alignItems: 'center',
    paddingStart: 20,
  },
  topicWrapper: {
    height: 70,
    border: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    width: 300,
    marginVertical: 20,
  },
  topicText: {
    fontSize: 18,
    textWrapper: 'wrap',
    color: theme.colors.white,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
});