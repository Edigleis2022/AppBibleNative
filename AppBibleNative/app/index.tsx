import Imagem from "../components/ProfileImage";
import Header  from "../components/Header";
import React from "react";
import { View } from "react-native";


export default function Home() {


   return (

     <View>

       <Header texto="App Bible" />
       <Imagem image={require('../assets/images/Cristo.jpg')} />
     </View>

   );
}

