import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={estilos.container}>
            <Text>Tela inicial</Text>
            <View style={estilos.botao}>
                <Button
                    title='Ir para details'
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title='Ir para Calculadora'
                    onPress={() => navigation.navigate('Calculadora')}
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title='Ir para IMC'
                    onPress={() => navigation.navigate('IMC')}
                />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '60%',
        marginTop: 20,
    }
})