import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      padding:10
    },
    text:{
      color:'grey'
    },
    badgeContainer:{
      backgroundColor:'#3777f0',
      width:20,
      height:20,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:45,
      top:10,
      borderColor:'white'
  
    },
    badgeText:{
      color:'white',
      fontSize:12
    },
    name:{
      fontWeight:'bold',
      fontSize:18,
      marginBottom:3
    },
    image:{
      height:50,
      width:50,
      borderRadius:30,
      marginRight:10
    },
    row:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    rightContainer:{
      flex:1,
      justifyContent:'center'
    }
  })
 
  export default styles;