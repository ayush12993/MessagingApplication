/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName,Text,Image,View,useWindowDimensions } from 'react-native';
import { FontAwesome5, SimpleLineIcons,Feather,MaterialCommunityIcons,AntDesign,Ionicons } from '@expo/vector-icons'; 


import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen 
      name="Home" 
      component={HomeScreen}  
      options={{headerTitle:HomeHeader}}/>
      <Stack.Screen name="ChatRoom" 
      component={ChatScreen} 
      options={{headerTitle:ChatHeader, headerBackTitleVisible: false}} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}



const HomeHeader = (props) =>{

  const {width} = useWindowDimensions();

  return(
   <View style={{flexDirection:'row', 
   justifyContent:'space-between',
    width,
    padding:10,
    alignItems:'center',}}>
     <Image 
     source={{ uri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7'}} 
     style={{width:30,height:30, borderRadius: 30}}
     />
     
     <Text style={{flex:1,textAlign:'center',marginLeft:50,fontWeight:'bold'}}>Signal</Text>
     <Feather name="camera" size={24} color="#595959" style={{marginHorizontal:10}} />
     <Feather name="edit-2" size={24} color="#595959" style={{marginHorizontal:10}} />
             
   </View>
  )
}

const ChatHeader = (props) =>{

  const {width} = useWindowDimensions();

  return(
   <View style={{flexDirection:'row',
   justifyContent:'space-between',
    width:width-60,
    padding:10,
    alignItems:'center',}}>
     <Image 
     source={{ uri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7'}} 
     style={{width:30,height:30, borderRadius: 30}}
     />
     
     <Text style={{flex:1,fontWeight:'bold',marginLeft:-50}}>{props.children}</Text>
     <Feather name="camera" size={24} color="#595959" style={{marginHorizontal:10}} />
     <Feather name="edit-2" size={24} color="#595959" style={{marginHorizontal:10}} />
             
   </View>
  )
}
