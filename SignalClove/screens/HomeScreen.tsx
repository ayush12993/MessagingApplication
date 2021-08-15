import * as React from 'react';
import { Text,View,Image,StyleSheet,FlatList } from 'react-native';

import ChatRoomItem from "../components/ChatRoomItem";
import ChatRoomData from "../assets/dummy-data/ChatRooms"





export default function TabOneScreen() {
  return (
    <View style={styles.pages}>
      <FlatList 
      data = {ChatRoomData}
      renderItem = {({item}) => <ChatRoomItem chatRoom = {item}/>}
      showsVerticalScrollIndicator={false}
      />
     </View>
   
  );
}

const styles = StyleSheet.create({
  pages:{
   flex:1,
   backgroundColor:'white'
  },
});
