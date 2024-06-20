import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ShareHeartLogo from './assets/imgs/logo-shareheart.png';
import ShareHeartLogoNome from './assets/imgs/shareheart-logotipo-white.png';
import ShapeRight from './assets/imgs/shape-right-desktop.png';
import ShapeLeft from './assets/imgs/shape-left-desktop.png';
import Home from './Home';
import Instituicoes from './Instituicoes';

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('Home');

  const renderizarConteudo = () => {
    if (abaAtiva === 'Home') {
      return <Home />;
    } else if (abaAtiva === 'Instituicoes') {
      return <Instituicoes />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={ShapeLeft} style={styles.ShapeLeft} ></Image>
        <View>
        </View>
        <View style={styles.headerLogo}>
          <Image source={ShareHeartLogo} style={styles.ShareHeartLogoHeader}></Image>
          <View style={styles.ShareHeartLogoNomeContainer}>
            <Image source={ShareHeartLogoNome} style={styles.ShareHeartLogoNomeImg} resizeMode="contain"></Image>
          </View>
        </View>

      </View>
      
      {/* Área para renderizar os componentes */}
      <View style={styles.content}>{renderizarConteudo()}</View>
      {/* Menu inferior */}
      <View style={styles.menu}>
        <Text
          style={[styles.menuItem, abaAtiva === 'Home' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Home')}
        >
          Página Inicial
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'Instituicoes' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Instituicoes')}
        >
          Instituições
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#5BCEAD',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLogo: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  ShareHeartLogoHeader: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  ShareHeartLogoNomeContainer: {
    flex: 1,
  },
  ShareHeartLogoNomeImg: {
    width: '40%',
    height: undefined,
    aspectRatio: 2,
  },
  ShapeLeft: {
    width: 400,
    top: -280,
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
  },
  menuIcon: {
    padding: 10,
    fontSize: 30,
    color: '#FFFFFF',
    right: 0,
  },
  
  nomeRestaurante: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fraseImpacto: {
    fontSize: 18,
    color: '#666',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  menuItem: {
    fontSize: 18,
    color: '#333',
  },
  menuItemAtiva: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
