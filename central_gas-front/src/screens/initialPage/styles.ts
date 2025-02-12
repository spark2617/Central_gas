import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },    
  logoContainer: {
    marginTop: 40,
    marginBottom: 30,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 75,
    resizeMode: "contain",
    overflow: "hidden",
    width: 152,
    height: 152,

    justifyContent: "center",
    
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  mainText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1b5e20',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  footerContainer: {
    
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor:colors.green[400],
    marginTop: 50,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});