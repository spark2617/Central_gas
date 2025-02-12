import { Construction, Settings, Settings2, TriangleAlertIcon } from 'lucide-react-native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ConstructionPage = () => {
  return (
      <View style={styles.container}>
        <TriangleAlertIcon color={"gray"} strokeWidth={1.2} size={150}/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ops!</Text>
        <Text style={styles.subheaderText}>Página em construção</Text>
      </View>
      
      <Text style={styles.footerText}>
        Desculpe, mas ainda estamos construindo esta página.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
  },
  subheaderText: {
    fontSize: 18,
    color: 'gray',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor:"white"
  },
  footerText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});

export default ConstructionPage;
