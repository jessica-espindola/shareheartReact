// Cardapio.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Icon } from 'react-native';
import ShareHeartLogoNome from './assets/imgs/shareheart-logotipo-white.png';
import Icons from 'react-native-vector-icons/MaterialIcons';





const Home = () => {
    
    return (
        <View style={styles.container}>
            <Image source={ShareHeartLogoNome} style={styles.ShareHeartLogoNomeImg} resizeMode="contain"></Image>
            <Text style={styles.titulo}>Seja Bem Vindo!</Text>
            <Text style={styles.item}>Doar pode salvar uma vida. </Text>
            <Text style={styles.item}>Que tal começar hoje?</Text>
            <Text style={styles.item}>Vem com a gente!</Text>
            <TouchableOpacity onPress={ () => setAbaAtiva('SobreRestaurante')}><Text style={styles.botao}>Campanhas</Text></TouchableOpacity>
            <TouchableOpacity onPress={ () => setAbaAtiva('Instituicoes')}><Text style={styles.botao}>Instituições</Text></TouchableOpacity>
            <View style={styles.instituicoesProximasContainer}>
            <Text style={styles.instituicoesProximasContainerItem}>Verifique as instituições mais próximas de você </Text>

            <TouchableOpacity style={styles.IconeMapaArea} onPress={ () => setAbaAtiva('Instituicoes') }><Icons style={styles.IconeMapa}>explore_nearby</Icons></TouchableOpacity> 
            
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    ShareHeartLogoNomeImg: {
        width: 300,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    item: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
    },
    botao: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: 'red',
        marginBottom: 30,
        color: 'white',

    },
    instituicoesProximasContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 120,
        
    },
    instituicoesProximasContainerItem: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
    },
    IconeMapaArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        display: 'flex',
        flexDirection: 'column',
    },
    IconeMapa: {
        flex: 1,
        fontSize: 70,
        resizeMode: 'contain',
        color: 'white',
        marginLeft: 5,
    },

});

export default Home;
