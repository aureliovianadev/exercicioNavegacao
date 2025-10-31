import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function CalculadoraScreen() {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [resultado, setResultado] = useState('')

    function somar() {
        setResultado(parseInt(num1) + parseInt(num2))
    }
    function subtrair() {
        setResultado(parseInt(num1) - parseInt(num2))
    }
    function multiplicar() {
        setResultado(parseInt(num1) * parseInt(num2))
    }
    function dividir() {
        setResultado(parseInt(num1) / parseInt(num2))
    }
    
    return (
        <View>
            <Text>Calculadora</Text>

            <TextInput
                placeholder="Digite um n°"
                value={num1}
                onChangeText={setNum1}
            />

            <TextInput
                placeholder="Digite um n°"
                value={num2}
                onChangeText={setNum2}
            />

            <View style={estilos.botao}>
                <Button
                    title="Somar"
                    onPress={() => somar()}
                />
            </View>

            <View style={estilos.botao}>
                <Button
                    title="Subtrair"
                    onPress={() => subtrair()}
                />
            </View>

            <View style={estilos.botao}>
                <Button
                    title="Multiplicar"
                    onPress={() => multiplicar()}
                />
            </View>

            <View style={estilos.botao}>
                <Button
                    title="Dividir"
                    onPress={() => dividir()}
                />
            </View>
            <Text>Resultado: {resultado}</Text>

        </View>
    )
}

const estilos = StyleSheet.create({
    botao: {
        marginVertical: 10
    }
})