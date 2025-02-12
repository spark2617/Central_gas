import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Instructions from '../screens/instructions';
import SignUp from '../screens/signUp';
import Login from "../screens/login/index"
import VerifyCode from '../screens/VerifyCode';
import UpdatePassword from '../screens/updatePassword';
import ProductList from '../screens/ProductList';
import ClientArea from '../screens/clientArea';
import ConstructionPage from '../screens/constructionPage';
import InitialPage from '../screens/initialPage';


//stack
const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="initialPage" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="instructions" component={Instructions} />
        <Stack.Screen name="initialPage" component={InitialPage} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="verifyCode" component={VerifyCode} />
        <Stack.Screen name="updatePassword" component={UpdatePassword} />
        <Stack.Screen name="productList" component={ProductList} />
        <Stack.Screen name="clientArea" component={ClientArea} />
        <Stack.Screen name="constructionPage" component={ConstructionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;