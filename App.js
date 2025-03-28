// Primeiro, instale as dependências necessárias:
// yarn add react-native-utils-navigation-bar react-native-svg
// npm install react-native-vector-icons
// npx pod-install (para iOS)
// npm install @react-navigation/native @react-navigation/bottom-tabs
// npm install react-native-screens react-native-safe-area-context
// expo install react-native-gesture-handler
// npm install @expo/vector-icons

import React, { useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { CurvedBottomBar } from 'react-native-utils-navigation-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => (
  <View style={{ backgroundColor: '#BFEFFF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela Inicial</Text>
    
  </View>
);

const AppsScreen = () => (
  <View style={{ backgroundColor: '#FFEBCD', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela de Apps</Text>
  </View>
);

const ChartScreen = () => (
  <View style={{ backgroundColor: '#BFEFFF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela de Gráficos</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ backgroundColor: '#FFEBCD', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Tela de Perfil</Text>
  </View>
);

StatusBar.setBarStyle('dark-content');

const App = () => {
  const [type, setType] = useState('down');

  const onClickButton = () => {
    if (type === 'up') {
      setType('down');
    } else {
      setType('up');
    }
  };

  const _renderIcon = (routeName, selectTab) => {
    let icon = '';

    switch (routeName) {
      case 'home':
        icon = 'home-outline';
        break;
      case 'apps':
        icon = 'apps-outline';
        break;
      case 'chart':
        icon = 'bar-chart-outline';
        break;
      case 'profile':
        icon = 'person-outline';
        break;
    }

    return (
      <Ionicons name={icon} size={23} color={routeName === selectTab ? '#FF3030' : 'gray'} />
    );
  };

  return (
    <View style={styles.container}>
      <CurvedBottomBar.Navigator
        style={[type === 'down' && {backgroundColor: ""}]}
        type={type}
        height={74}
        circleWidth={55}
        bgColor="white"
        borderTopLeftRight={true}
        initialRouteName="home"
        renderCircle={() => (
          <TouchableOpacity
          style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]} 
            onPress={onClickButton}
          >
            <Ionicons name="chatbubbles-outline" size={24} />
          </TouchableOpacity>
        )}
        tabBar={({ routeName, selectTab, navigation }) => {
          return (
            <TouchableOpacity
              onPress={() => {navigation(routeName),onClickButton}}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}
            >
              {_renderIcon(routeName, selectTab)}
            </TouchableOpacity>
          );
        }}
      >
        <CurvedBottomBar.Screen
          name="home"
          position="left"
          component={HomeScreen}
        />
        <CurvedBottomBar.Screen
          name="apps"
          component={AppsScreen}
          position="left"
        />
        <CurvedBottomBar.Screen
          name="chart"
          component={ChartScreen}
          position="right"
        />
        <CurvedBottomBar.Screen
          name="profile"
          component={ProfileScreen}
          position="right"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    // paddingTop: StatusBar.currentHeight,
  },
  // tabBar: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   paddingHorizontal: 20,
  //   backgroundColor: 'white',
  //   // height: 100,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: -1,
  //   },
  //   shadowOpacity: 0.20,
  //   shadowRadius: 1.41,
  //   elevation: 2,
  
  // },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.40,
    shadowRadius: 1.51,
    elevation: 1,
    bottom: 19
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 1,
  }
});