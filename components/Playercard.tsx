import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Button, Dimensions } from 'react-native';
import BigCard from './navigation/Tarjetas/BigCard';
import MiniCard from './navigation/Tarjetas/MiniCard';
import { TouchableOpacity } from 'react-native-gesture-handler';


const PlayerCard = ({ name, statics, position }) => {

  const {width, height} = Dimensions.get('window');
  const fieldHeight = height - 100
  const [visible, setVisible] = useState(true);

  const presionar= () => {
    setVisible(!visible)
  }

  

  return (
    <View style={styles.container}>    
      <ImageBackground source={require('@/assets/images/cancha.jpg')} style={styles.soccerField}>
        <TouchableOpacity onPress={presionar}> 
          {
            visible ? (<MiniCard name={name} statics={statics} position={position}/>) 
            :
            (<BigCard name={name} statics={statics} position={position}/>)
          }          
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    soccerField: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
});

export default PlayerCard;