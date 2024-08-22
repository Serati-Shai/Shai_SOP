import React from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useCart } from './CartContext';

const Menu = () => {
    const { menu, addToCart } = useCart();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {menu.map((item) => (
                    <View key={item.id} style={styles.itemContainer}>
                        {item.img ? (
                            <Image source={{ uri: item.img }} style={styles.image} />
                        ) : (
                            <View style={styles.imagePlaceholder} />
                        )}
                        <View>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemPrice}>{item.price}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    title="Add to cart"
                                    onPress={() => addToCart(item)}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Add to cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flex: 1,
        padding: 16,
    },
    itemContainer: {
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    imagePlaceholder: {
        width: '100%',
        height: 200,
        backgroundColor: '#ccc',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#555',
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#D6EFD8', 
        paddingVertical: 12, 
        paddingHorizontal: 20, 
        borderRadius: 8, 
        alignItems: 'center', 
        justifyContent: 'center', 
      },
      buttonText: {
        color: 'black', 
        fontSize: 16, 
        fontWeight: 'bold', 
      },
    

});