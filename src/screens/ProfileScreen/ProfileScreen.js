import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { auth, user } from '../../../firebase'


const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <Text style={styles.myText}>This is ProfileScreen page</Text>    
    </View>
  )
}

const styles = StyleSheet.create({
  myText: {
    color: 'purple',
    textAlign: 'center'
  }
  });

export default ProfileScreen