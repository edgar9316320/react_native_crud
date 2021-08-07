import React, {useState, useEffect} from 'react'
import { 
  StyleSheet, 
  Text, View, FlatList, TextInput, 
  TouchableOpacity, CheckBox, Switch} from 'react-native';


//Iconos
import Icon from 'react-native-vector-icons/Ionicons'

const numColumns = 3

export function HomeScreen({ navigation }) {


    return (
        <View style={{flex: 1}}>
          
          <Text>Edgar</Text>
          
        </View>
      
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 20,
    },
    cabecera: {
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      backgroundColor: "#f4511e",
      height: 100,
    },
    titulo: {
      fontSize: 50,
      color: "#fff",
      textAlign: 'center',
      marginTop: 10,
      fontWeight: 'bold',
    },
    elemento: {
      fontSize: 12,
      backgroundColor: '#F6F6F6',
      borderBottomColor: "#f4511e",
      borderBottomWidth: 1,
      borderRadius: 6, 
      height: 60,
      width: 113,
      margin: 2,
      padding: 4, 
      
         
    },
    precio: {
      fontSize: 14,
      color: "#f4511e",
      fontWeight: 'bold',
    },
    lista: {
      flex: 1,
      paddingTop: 10,
      //backgroundColor: '#16D3BC',
      //alignContent: 'center',
    },
    listah: {
      paddingTop: 5,
      height: 80,
    },
    txtinput: {
      height: 40, 
      width: 310,
      borderColor: "#f4511e",
      borderWidth: 0.1,
      borderRadius: 20,
      paddingLeft: 50,
      textDecorationColor: "#f4511e",
      flexDirection: "row",
      justifyContent:'space-between',
      marginTop: 10,
      
    },
    inputicon: {
      position: "absolute",
      top: 15,
      left: 15,
    },
    CheckBox: {
      alignSelf: "center",
      marginTop: 10,
      
    },

    contenedorLista: {
      flex: 1,
      alignContent: "center",
    }


  });