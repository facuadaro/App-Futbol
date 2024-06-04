import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


interface PlayerCardProps {
    name: string;
    position: string;
    rating: string;
    photo: string;
    star: any;
  }

const PlayerCard = ({ name, position, rating, photo, star }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photo }} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      <Text style={styles.star}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#EFB810',
    width: 240,
    height: 340,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center', // Centra los elementos horizontalmente
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  star: {
    width: 10,
    height: 10,
    backgroundColor: '#EFB810',
  }
});

export default PlayerCard;