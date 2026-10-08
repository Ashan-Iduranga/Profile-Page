import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen} edges={['top']}>
        <StatusBar style="light" backgroundColor="#000" />

        {/* App bar */}
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>My Profile</Text>
        </View>

        <View style={styles.body}>
          {/* Avatar */}
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <MaterialIcons name="person" size={120} color="#fff" style={styles.avatar} />
            </View>
            <MaterialIcons name="check" size={40} color="#22c55e" style={styles.check} />
          </View>

          <View style={styles.divider} />

          {/* Name */}
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Ashan Iduranga</Text>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.row}>
            <MaterialIcons name="email" size={22} color="#000" />
            <Text style={[styles.value, styles.rowText]}>idurangaashan2001@gmail.com</Text>
          </View>

          {/* Points */}
          <Text style={styles.label}>Points</Text>
          <View style={styles.row}>
            <MaterialIcons name="star" size={22} color="#000" />
            <Text style={[styles.value, styles.rowText]}>{points}</Text>
          </View>
        </View>

        {/* Floating action button */}
        <Pressable
          style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
          onPress={() => setPoints(points + 1)}
          accessibilityLabel="Add a point"
        >
          <MaterialIcons name="add" size={28} color="#fff" />
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  appBar: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  body: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 24,
  },
  avatarWrapper: {
    alignSelf: 'center',
    marginTop: 16,
  },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#cfd8dc',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  avatar: {
    marginBottom: -18,
  },
  check: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  divider: {
    height: 1.5,
    backgroundColor: '#000',
    marginTop: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 12,
    marginBottom: 6,
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fabPressed: {
    opacity: 0.7,
  },
});
