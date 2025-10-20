import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle, Animated } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface CollapsibleProps extends PropsWithChildren {
  title: string;
  headerBackgroundColor?: string;
  titleColor?: string;
}

export function Collapsible({
  children,
  title,
  headerBackgroundColor,
  titleColor,
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  // Controle de rotação do ícone
  const rotation = new Animated.Value(isOpen ? 1 : 0);

  // Animar rotação ao abrir/fechar
  Animated.timing(rotation, {
    toValue: isOpen ? 1 : 0,
    duration: 200,
    useNativeDriver: true,
  }).start();

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        style={[
          styles.heading,
          { backgroundColor: headerBackgroundColor ?? (theme === 'light' ? Colors.light.background : Colors.dark.background) },
        ]}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <IconSymbol
            name="chevron.right"
            size={18}
            weight="medium"
            color={titleColor ?? (theme === 'light' ? Colors.light.icon : Colors.dark.icon)}
          />
        </Animated.View>
        <ThemedText
          type="defaultSemiBold"
          style={[styles.title, { color: titleColor ?? (theme === 'light' ? '#000' : '#fff') }]}
        >
          {title}
        </ThemedText>
      </TouchableOpacity>
      {isOpen && (
        <ThemedView style={styles.content}>
          <View style={styles.contentWrapper}>{children}</View>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    fontSize: 16,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  contentWrapper: {
    marginTop: 10,
  },
});
