import React from 'react';
import { View, Text, Image, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { styles } from './styles';


export default function InitialPage({ navigation }: any) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const backgroundColorAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundColorAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(backgroundColorAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [fadeAnim, backgroundColorAnim]);

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#28a745', '#34d058'],
  });

  return (
    
      <Animated.View style={[styles.container, { backgroundColor }]}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>


          
        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={styles.logo}
          />
        </Animated.View>

        {/* Texto principal */}
        <Text style={styles.mainText}>
          Encontre os melhores fornecedores de gás, água, gelo, lenha, carvão e utensílios!
        </Text>

        {/* Botões de navegação */}
        <TouchableOpacity onPress={() => navigation.navigate("login")} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("signUp")} style={styles.button}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("instructions")} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Como usar o app</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("productList")} style={styles.button}>
          <Text style={styles.buttonText}>Ver Produtos</Text>
        </TouchableOpacity>

        {/* Texto informativo adicional */}
        <Text style={styles.infoText}>
          Tenha praticidade e rapidez com diversas opções de revendas próximas a você.
        </Text>

        {/* Rodapé com informações */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Melhores preços, promoções exclusivas e campanhas bônus, tudo na palma da sua mão!
          </Text>
        </View>
        </ScrollView>


      </Animated.View>
    
  );
}


