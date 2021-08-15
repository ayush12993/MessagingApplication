import React from "react";
import {Text,View,StyleSheet,FlatList,SafeAreaView} from "react-native";
import Message from "../components/Message";
import chatRoomData from '../assets/dummy-data/Chats';
import { useRoute,useNavigation } from "@react-navigation/core";
import MessageInput from "../components/MessageInput";
import Users from "../assets/dummy-data/Users";

export default function ChatScreen(){
   const route = useRoute();
   const navigation = useNavigation();

  console.warn("Displaying chat room: ",route.params?.id)

  navigation.setOptions({title: 'Elon Musk'})


    return(
        <SafeAreaView style={styles.pages}>
            <FlatList
            data = {chatRoomData.messages}
            renderItem = {({ item}) => <Message message={item}/>}
            inverted
            />

            <MessageInput />
            
        </SafeAreaView>
        
    )
};

const styles = StyleSheet.create({
    pages:{
        backgroundColor:'white',
        flex:1,
    }
})