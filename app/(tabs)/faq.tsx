import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/freaky.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: '',
              android: '',
              web: '',
            })}
          </ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
