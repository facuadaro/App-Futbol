import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const MiniCard = ({ name, statics, position }) => {
  return (
    <View>
      <View style={styles.card}>
        <ImageBackground source={require('@/assets/images/Jugadores/Messi.jpg')} resizeMode='cover' style={styles.backGroundCard}>
            <View style={styles.info}>
              <View style={styles.skills}>
                <Text style={styles.points}>
                  {statics}
                </Text>
                <Text style={styles.position}>
                  {position}
                </Text>
              </View>
              <Image source={require('@/assets/images/Banderas/bandera-arg.jpg')} style={styles.nacionality} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.statics}>
        <Text style={styles.name}>{name}</Text>
        {/* <View style={styles.containerStars}>
          <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
          <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
          <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
          <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
          <Image style={styles.star} source={require('@/assets/images/EstrellaAmarilla.png')}></Image>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#EFB810',
    width: 130,
    height: 70,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center', // Centra los elementos horizontalmente
  },
  backGroundCard: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // paddingBottom: 10
  },
  data: {
    alignItems: 'flex-start',
    width: '100%'
  },
  skills: {
    alignItems: 'center',
    paddingVertical: 2
  },
  info: {
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
    fontWeight: 'bold',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  points: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  position: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  statics: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3
  },
  name: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    // textShadowOffset: {width: 1, height: 2}
  },
  containerStars: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end'
  },
  star: {
    width: 11,
    height: 11,
  },
  nacionality: {
    width: 20,
    height: 10,
    marginBottom: 6
  }
});

export default MiniCard;
