import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const RegistroUsuariosScreen = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [genero, setGenero] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = () => {
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Género:', genero);
        console.log('Mensaje:', mensaje);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
                placeholder="Ingrese su nombre"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Ingrese su email"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Género</Text>
            <Picker
                selectedValue={genero}
                style={styles.input}
                onValueChange={(itemValue) => setGenero(itemValue)}
            >
                <Picker.Item label="Seleccione su género" value="" />
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Femenino" value="femenino" />
                <Picker.Item label="Otro" value="otro" />
            </Picker>

            <Text style={styles.label}>Mensaje</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                value={mensaje}
                onChangeText={setMensaje}
                placeholder="Escriba su mensaje aquí"
                multiline
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default RegistroUsuariosScreen;
