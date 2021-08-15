import React,{useState} from "react";
import { View, Text ,StyleSheet, TextInput,Pressable,Platform, KeyboardAvoidingView} from "react-native";
import { FontAwesome5, SimpleLineIcons,Feather,MaterialCommunityIcons,AntDesign,Ionicons } from '@expo/vector-icons'; 

const MessageInput = () => {
    const[mesaage,setMessage] = useState('');

    const sendMessage = () => {
        //send the message function to be implemented
        console.warn("sending: ",mesaage);

        setMessage('');
    }

    const onPlusClicked = () => {
        console.warn("On plus clicked");
    }

    const onPress = () => {
        if(mesaage){
            sendMessage();
        }
        else{
            onPlusClicked();
        }
    }

    console.warn(mesaage);

    return(
        
        <KeyboardAvoidingView 
        style = {styles.root} 
        behavior={Platform.OS === "android"? "padding" : "height"}
        keyboardVerticalOffset={200}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color = "#595959" style={styles.icon}/>

             <TextInput 
             style={styles.input}
             value={mesaage}
             onChangeText={setMessage}
             placeholder="Signal message...."/>

             <Feather name="camera" size={24} color="#595959" style={styles.icon} />
             <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
            {mesaage? <Ionicons name="send" size={18} color = {"#FFFFFF"}/> : <AntDesign name="plus" size={24} color="#FFFFFF" />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root:{
       flexDirection:'row',
       padding:10,
    },
    inputContainer:{
      backgroundColor:'#f2f2f2',
      flex:1,
      padding:5,
      marginRight:10,
      borderRadius:25,
      borderWidth:1,
      borderColor:'#dedede',
      justifyContent:'center',
      flexDirection:'row'
    },
    icon:{
        marginHorizontal:5
    },
    buttonContainer:{
       width:40,
       height:40,
       backgroundColor:'#3777f0',
       borderRadius: 25,
       justifyContent: 'center',
       alignItems: 'center',
       padding:10
    },
    buttonText:{
        color: 'white',
        fontSize: 35,
    },
    input:{
        flex:1,
        marginHorizontal:5
    }
})

export default MessageInput;