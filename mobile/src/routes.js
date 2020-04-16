import React from 'react';

import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Delivery from './pages/Delivery';
import Profile from './pages/Profile';

import DeliveryDetails from './pages/Delivery/DeliveryDetails';
import DeliveryProblems from './pages/Delivery/DeliveryDetails/DeliveryProblems';
import ConfirmDelivery from './pages/Delivery/DeliveryDetails/ConfirmDelivery';
import ReportDelivery from './pages/Delivery/DeliveryDetails/ReportDelivery';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DeliveryStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{
          title: 'Delivery',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={{
          title: 'Detalhes da encomenda',
          headerStyle: {
            backgroundColor: '#7D40E7',
            height: 80,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ReportDelivery"
        component={ReportDelivery}
        options={{
          title: 'Informar um problema',
          headerStyle: {
            backgroundColor: '#7D40E7',
            height: 80,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeliveryDetails');
              }}
            >
              <Icon name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="DeliveryProblems"
        component={DeliveryProblems}
        options={{
          title: 'Visualizar Problemas',
          headerStyle: {
            backgroundColor: '#7D40E7',
            height: 80,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeliveryDetails');
              }}
            >
              <Icon name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          title: 'Confirmar entrega',
          headerStyle: {
            backgroundColor: '#7D40E7',
            height: 80,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeliveryDetails');
              }}
            >
              <Icon name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={SignIn} />
      </Stack.Navigator>
    </>
  ) : (
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#7D40E7',
          inactiveTintColor: '#999999',
          keyboardHidesTabBar: true,
        }}
      >
        <Tabs.Screen
          name="Delivery"
          component={DeliveryStack}
          options={{
            tabBarLabel: 'Entregas',
            tabBarIcon: ({ color }) => (
              <Icon name="reorder" size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: ({ color }) => (
              <Icon name="account-circle" size={25} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
}
