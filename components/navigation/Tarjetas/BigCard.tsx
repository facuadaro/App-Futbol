import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const BigCard = ({ name, statics, position }) => {
  return (
    <View>
      <View style={styles.card}>
          <ImageBackground source={require('@/assets/images/Jugadores/Messi.jpg')} resizeMode='cover' style={styles.backGroundCard}>
            <View style={styles.info}>
              <View style={styles.skills}>
                <Text style={styles.info}>
                  {statics}
                </Text>
                <Text style={styles.position}>
                  {position}
                </Text>
                <Image source={require('@/assets/images/Banderas/bandera-arg.jpg')} style={styles.nacionality}>
                    
                </Image>
              </View>
            </View>
            <View style={styles.statics}>
              <Text style={styles.name}>{name}</Text>
              <View style={styles.containerStars}>
                <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
                <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
                <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
                <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
                <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
              </View>
            </View>
          </ImageBackground>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderWidth: 5,
      borderColor: '#EFB810',
      width: 241,
      height: 429,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      alignItems: 'center', // Centra los elementos horizontalmente
    },
    backGroundCard: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingBottom: 10
    },
    data: {
      alignItems: 'flex-start',
      width: '100%'
    },
    skills: {
      width: '100%',
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    info: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 52,
      lineHeight: 50,
    },
    statics: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
      color: 'white',
      textShadowColor: 'black',
      // textShadowOffset: {width: 1, height: 2}
    },
    position: {
      fontSize: 30,
      lineHeight: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    containerStars: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center'
    },
    star: {
      width: 20,
      height: 20,
    },
    nacionality: {
      width: 35,
      height: 20,
      marginVertical: 15
    }
});


export default BigCard;
