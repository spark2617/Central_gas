import { colors } from "../../styles/colors"
import React from "react"
import { Text, TouchableOpacity, View, } from "react-native"
import { styles } from "./styles"


// import { RouteProp } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// type RootStackParamList = {
//   footer: { themeDark: boolean };
// };

// type FooterRouteProp = RouteProp<RootStackParamList, 'footer'>;
// type FooterNavigationProp = NativeStackNavigationProp<RootStackParamList, 'footer'>;

// interface Props {
//   navigation: FooterNavigationProp;
//   route: FooterRouteProp;
// }

interface Props {
  themeDark: boolean
}

export default function Footer({themeDark}:Props) {



  return (
    <View style={[styles.promoContainer, {
      backgroundColor: themeDark ? "#2B4C2F" : '#009240',
      borderTopWidth: themeDark ? 1 : 0,
      borderColor: colors.gray[100],
    },]}>
      <Text style={styles.promoText}>
        VOCÊ GOSTARIA DE TER ACESSO AS CAMPANHAS PROMOCIONAIS DA CENTRAL DE GÁS E ÁGUA E GANHAR MUITAS RECARGAS DE GÁS OU MUITOS PRODUTOS OFERECIDOS AQUI NO APP?
      </Text>
      <Text style={styles.promoSubText}>
        ENTÃO BASTA CLICAR NO LINK A BAIXO, VOCÊ SERÁ DIRECIONADO (A) PARA O GRUPO QUE A CENTRAL TEM NO WHATSAP NELE VOCÊ SERÁ INFORMADO(A) DE TODAS AS CAMPANHA QUE IRÃO ACONTECER TODAS AS SEMANAS.
      </Text>
      <TouchableOpacity style={[styles.linkButton, {
        borderWidth: themeDark ? 1 : 0,
        borderColor: colors.gray[100]
      }]}>
        <Text style={styles.linkButtonText}>LINK</Text>
      </TouchableOpacity>
    </View>
  )
}

