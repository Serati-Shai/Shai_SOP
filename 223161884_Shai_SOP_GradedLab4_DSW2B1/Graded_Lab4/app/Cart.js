import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import { useCart } from './CartContext';

const Cart = () => {
    const { cart, getTotalPrice, clearCart, updateQuantity, removeItem } = useCart();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {cart.length === 0 ? (
                    <Text style={styles.emptyText}>Your cart is empty</Text>
                ) : (
                    cart.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>R{item.price} x {item.quantity}</Text>
                            <View style={styles.quantityContainer}>
                                <Button
                                    title="-"
                                    onPress={() => {
                                        if (item.quantity > 1) {
                                            updateQuantity(item.id, item.quantity - 1);
                                        } else {
                                            removeItem(item.id);
                                        }
                                    }}
                                />
                                <TextInput
                                    style={styles.quantityInput}
                                    value={String(item.quantity)}
                                    keyboardType="numeric"
                                    onChangeText={(text) => updateQuantity(item.id, parseInt(text) || 1)}
                                />
                                <Button
                                    title="+"
                                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                                />
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
            {cart.length > 0 && (
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: R{getTotalPrice()}</Text>
                    <Button title="Checkout"  onPress={() => alert('CheckOut Complete')} />
                    <Button title="Clear Cart" onPress={clearCart} color="red" />
                </View>
            )}
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#80AF81',
    },
    scrollView: {
        flex: 1,
    },
    itemContainer: {
        marginBottom: 16,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    quantityInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
        marginHorizontal: 8,
        width: 50,
        textAlign: 'center',
    },
    totalContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    },
});