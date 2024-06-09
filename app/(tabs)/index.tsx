import { Image, StyleSheet, Platform, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import PlayerCard from '@/components/Playercard';

export default function HomeScreen() {
  return (

    <>
      <ScrollView contentContainerStyle={styles.container}>
        <PlayerCard
          name="Lionel Messi"
          position="CD"
          statics="89"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  }
});



