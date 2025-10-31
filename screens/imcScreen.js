import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function ImcScreen(){

    const [massa, setMassa] = useState('')
    const [altura, setAltura] = useState('')
    const [imc, setImc] = useState('')

    function IMC() {
        setImc( parseInt(massa) / ( parseFloat(altura) * parseFloat(altura)))
    }
    
    return(
        <View>
            <Text>IMC</Text>

            <TextInput
                placeholder="Digite o seu peso"
                value={massa1}
                onChangeText={setMassa}
            />

            <TextInput
                placeholder="Digite sua altura em metros"
                value={altura}
                onChangeText={setAltura}
            />

        <View style={estilos.botao}>
        <Button
          title="IMC"
          onPress={() => imc()}
          />
      </View>

       <Text>Resultado: {imc} 

        Menor que 18,5	Magreza	0
        Entre 18,5 e 24,9	Normal	0
        Entre 25,0 e 29,9	Sobrepeso	I
        Entre 30,0 e 39,9	Obesidade	II
        Maior que 40,0	Obesidade Grave	III
       </Text>
       
        </View>    
    ) 
}

const estilos = StyleSheet.create({
  botao: {
    marginVertical: 10
  }
})
