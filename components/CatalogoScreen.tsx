import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';

// 1. Importando os dados do nosso arquivo JSON
import catalogoDeLivros from '../catalogo.json';

// Definindo o tipo de dado para cada item do nosso catálogo para o TypeScript
interface Livro {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
}

// Este é o nosso componente principal da tela
export default function CatalogoScreen() {
  
  // Função que renderiza cada item individualmente (o "card")
  const renderLivro = ({ item }: { item: Livro }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitulo}>{item.titulo}</Text>
      <Text style={styles.cardSubtitulo}>{item.subtitulo}</Text>
      <Text style={styles.cardAno}>Publicado em: {item.ano}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.tituloPrincipal}>Minhas Obras Literárias Favoritas</Text>
      
      {/* 3. Usando FlatList para renderizar a lista. 
        É mais otimizado que usar .map() diretamente dentro de um ScrollView.
      */}
      <FlatList
        data={catalogoDeLivros}
        renderItem={renderLivro}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

// 4. Aqui fica toda a nossa estilização
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz com que o container ocupe a tela inteira
    backgroundColor: '#f5f5f5', // Uma cor de fundo suave
    paddingHorizontal: 20, // Espaçamento nas laterais
    paddingTop: 20,
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20, // Espaço abaixo do título
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#ffffff', // Fundo branco para o card
    borderRadius: 8, // Bordas arredondadas
    padding: 16, // Espaçamento interno
    marginBottom: 16, // Espaço entre os cards
    borderWidth: 1, // Largura da borda
    borderColor: '#ddd', // Cor da borda
    shadowColor: '#000', // Sombra para dar profundidade (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para dar profundidade (Android)
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  cardSubtitulo: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  cardAno: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
    textAlign: 'right',
  },
});