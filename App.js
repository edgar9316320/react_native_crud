// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, FlatList, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'
// import axios from 'axios'

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default class App extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       numColumns: 3,
//       loading: false,
//       data: [],
   
//       //url: 'http://my-api-mysql.herokuapp.com/customers'
//       url: 'https://apiaym.herokuapp.com/api/productos'
//       //  url: 'https://pokeapi.co/api/v2/pokemon'
//     }
//   };
//   componentDidMount() {
    
//       fetch(this.state.url)
//           .then(res => res.json())
//           .then( res => {
//             this.setState({
//                 data: res,
//                 //url: res.next,
//                 loading: false
//             })
//           });

//   };

  
//   // const numColumns = 3

//   //  const [cedula, setCedula] = useState("")  
//   //  const [nombre, setNombre] = useState("")
//   //  const [tlf, setTlf] = useState("")
//   //  const [tlf2, setTlf2] = useState("")
//   //  const [tlf_pago_movil, setTlf_pago_movil] = useState("")
//   //  const [correo, setCorreo] = useState("")
//   //  const [pass_correo, setPass_correo] = useState("")
//   // const [productos, setProductos] = useState([])


//   // useEffect(() => {
//   //   axios.get(`https://apiaym.herokuapp.com/api/productos`)
//   //     .then(res => {
//   //       const nameList = res.data;
//   //       this.setState({ productos: nameList });
//   //     })

    

//   //   },[])

//   render(){
//   return (
//      <View style={styles.container}>
//           <View style={[styles.box, styles.box1]}>
//             <Icon name={'md-car'} size={28} color={"#f4511e"} style={styles.inputicon} />
//             <Text style={{ textAlign: "center", top: 60}}>Precio</Text>
//             {/* <Image
//               style={{ width: 100, height: 100, marginBottom: 15, borderRadius: 25, elevation: 15 }}
//               source={require("./assets/myimages/pizza.jpg")}
//             /> */}
//           </View>

//           <View style={[styles.box, styles.container]}>

//           <Icon name={'md-person-add'} size={28} color={"#f4511e"} style={styles.inputicon} />
//               <TextInput 
//                 style={styles.txtinput}
//                 placeholder="Cedula"
//                 onChangeText={text => {setCedula({cedula: text})}}
            
//               />

//               <Icon name={'md-beaker'} size={28} color={"#f4511e"} style={styles.inputicon2} />
//               <TextInput
//                 style={styles.txtinput}
//                 placeholder="Nombre"
//                 onChangeText={text => {setNombre({nombre: text})}}
//                 //value={this.state.cantidad}
//               />

//               <Icon name={'md-basket'} size={28} color={"#f4511e"} style={styles.inputicon3} />
//               <TextInput
//                 style={styles.txtinput}
//                 placeholder="Telefono"
//                 onChangeText={text => {setTlf({tlf: text})}}
//                 //value={this.state.precio}
//               />
              
              
//               <Icon name={'md-person-add'} size={28} color={"#f4511e"} style={styles.inputicon4} />
//               <TextInput
//                 style={styles.txtinput}
//                 placeholder="Telefono Alternativo"
//                 onChangeText={text => {setTlf2({tlf2: text})}}
//                 //value={this.state.descripcion}
//               />

//               <Icon name={'md-add'} size={28} color={"#f4511e"} style={styles.inputicon5} />
//               <TextInput
//                 style={styles.txtinput}
//                 placeholder="Telefono Pago Movil"
//                 onChangeText={text => {setTlf_pago_movil({tlf_pago_movil: text})}}
//                 //value={this.state.descripcion}
//               />

//               <Icon name={'md-cart-outline'} size={28} color={"#f4511e"} style={styles.inputicon6} />
//               <TextInput
//                 style={styles.txtinput}
//                 placeholder="Correo"
//                 onChangeText={text => {setCorreo({correo: text})}}
//                 //value={this.state.descripcion}
//               />

//               <Icon name={'md-car'} size={28} color={"#f4511e"} style={styles.inputicon7} />
//               <TextInput
//                 style={styles.txtinput}
//                 placeholder="Contraseña"
//                 onChangeText={text => {setPass_correo({pass_correo: text})}}
//                 //value={this.state.descripcion}
//               />

// <TouchableOpacity
//                 onPress={() => dispatch(agregarClientesAccion(cedula, nombre, tlf, tlf2,
//                   tlf_pago_movil, correo, pass_correo ))}
//               >
//                 <Text style={styles.btnChevere}> Agregar </Text>
//               </TouchableOpacity>

//               {/* <View style={ {flex:1, paddingTop:50, paddingLeft:5}}>
//                   <Text> Listado </Text>
//                   <FlatList
//                     data={this.state.data}
//                     renderItem={
//                       ({item}) => <Text style={styles.item}> {item.nombre}</Text>
//                     }
//                 />

//               </View> */}
              
//                <FlatList  style={styles.lista}
//                 data= {this.state.data}
//                 keyExtractor={item => item.id}
//                 renderItem={({item})=> 
//                   <View>
//                     <TouchableOpacity
//                       //onPress={() => navigation.navigate('Details')}
//                       onPress={() => Alert.alert('titulo','mensaje')}
//                     >
//                       <Text style={styles.elemento}>{item.nombre} - {item.precio} </Text>
                      
//                     </TouchableOpacity>
//                   </View>
//                 } 
//                // numColumns= {this.state.numColumns}
               
                
//               />  

//           </View>
         
     
            
             
//       <StatusBar style="auto" />
//     </View>
//    );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: '30%',
//     marginHorizontal: 20,
//      },
//   elemntos: {
    
    
    
//   },
//   txtinput: {
//     //flex:1,
//     height: 40, 
//     borderColor: "#f4511e",
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingLeft: 50,
//     textDecorationColor: "#f4511e",
//     flexDirection: "row",
//     justifyContent:'space-between',
//     marginTop: 10,
    
//   },
//   inputicon: {
//     position: "absolute",
//     top: 20,
//     alignSelf: "center"
    
//   },
//   inputicon2: {
//     position: "absolute",
//     top: 65,
//     left: 15,
//   },
//   inputicon3: {
//     position: "absolute",
//     top: 115,
//     left: 15,
//   },
//   inputicon4: {
//     position: "absolute",
//     top: 165,
//     left: 15,
//   },
//   inputicon5: {
//     position: "absolute",
//     top: 215,
//     left: 15,
//   },
//   inputicon6: {
//     position: "absolute",
//     top: 265,
//     left: 15,
//   },
//   inputicon7: {
//     position: "absolute",
//     top: 315,
//     left: 15,
//   },
//   btnChevere: {
//     borderRadius: 45,
//     backgroundColor: "#f4511e",
//     color: '#fff',
//     height: 40,
//     textAlign: 'center',
//     paddingTop: 9,
//     marginTop: 20,
//     fontSize: 15,

//   },
//   titulo: {
//     fontSize: 18,
//     color: "#f4511e",
//     textAlign: 'center',
//   },
//   elemento: {
//     fontSize: 12,
//     backgroundColor: '#F6F6F6',
//     borderBottomColor: "#f4511e",
//     borderBottomWidth: 1,
    
//     borderRadius: 6, 
//     height: 60,
//     width: 100,
//     margin: 1,
//     padding: 5,    
  
//   },
//   botonFlotante: {
//     borderRadius: 60,    
//     bottom: 10,              
//     right: 10, 
//   },
//   lista: {
//     paddingTop: 20,
    
//   },
//   box: {
//     height: 90,
//     width: 90,
//     borderRadius: 25,
    
    
//   },
//   box1: {
//     backgroundColor: '#F1F1F1',
//     elevation: 15
//   },

// });


import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default App;