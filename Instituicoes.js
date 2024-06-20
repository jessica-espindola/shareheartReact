import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

// Importando o arquivo JSON local
import instituicoesData from './instituicoes.json';

const Instituicoes = () => {
    const [textoBusca, setTextoBusca] = useState('');
    const [resultados, setResultados] = useState([]);

    const buscarInstituicoes = () => {
        const resultadosFiltrados = instituicoesData.filter(instituicao =>
            instituicao.nome.toLowerCase().includes(textoBusca.toLowerCase())
        );
        setResultados(resultadosFiltrados);
    };

    const renderizarConteudoAPI = () => {
        if (resultados.length === 0) {
            return <Text>Nenhum resultado encontrado</Text>;
        }

        return (
            <FlatList
                data={resultados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.nome}</Text>
                    </View>
                )}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Instituições</Text>
            <Text style={styles.info}>Aqui você encontra todas as instituições cadastradas</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar..."
                    value={textoBusca}
                    onChangeText={text => setTextoBusca(text)}
                />
                <TouchableOpacity onPress={buscarInstituicoes} style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Buscar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>{renderizarConteudoAPI()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        flex: 1,
    },
    searchButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#5BCEAD',
        borderRadius: 20,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    content: {
        flex: 1,
        width: '100%',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
});

export default Instituicoes;
