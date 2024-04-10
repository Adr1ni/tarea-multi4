import React from 'react';
import { View, Text, FlatList, Image,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AlbumScreen = () => {
    const data = [
        { id: 1, uri: 'https://paylesschat.com/peru/17843-large_default/zapatos_de_vestir_tipo_oxford_.jpg' },
        { id: 2, uri: 'https://www.projectpieta.com/wp-content/uploads/2022/02/polos.jpg' },
        { id: 3, uri: 'https://assemblylabel.com/cdn/shop/products/c01a596fd3cb4413bad785724b510096_600x.jpg?v=1693190679' },
        { id: 4, uri: 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-15/gallery/pink-1.jpg' },
        { id: 5, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhtI3k3uFr_DQiqX5v90gpwvhExFzNBNe7fgoKSCURA&s' },
        { id: 6, uri: 'https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fbdc051a9f8a94cb88774344b3377fc1d?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=8f6e59e01fd360f93b408a8c789efd43' },
        { id: 7, uri: 'https://promart.vteximg.com.br/arquivos/ids/7792011-1000-1000/111352.jpg?v=638417890143630000' },
        { id: 8, uri: 'https://portape.vtexassets.com/arquivos/ids/162318/0000010496--2-.jpg?v=638089668778970000' },
        { id: 9, uri: 'https://calimodpruebaio.vtexassets.com/arquivos/ids/233208-800-auto?v=638406989336930000&width=800&height=auto&aspect=true' },
        { id: 10, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxkYbE_3eqDDUH1uoGaNcYSW6JdanmpC1Lz8T1Q_QCQ&s' },
    ];

    const renderItem = ({ item }) => (
        <Image source={{ uri: item.uri }} style={styles.image} />
      );
    
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false} 
            numColumns={3} 
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  listContainer: {
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 5,
  },
});

export default AlbumScreen;
