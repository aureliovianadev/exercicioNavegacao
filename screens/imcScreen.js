import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function ImcScreen(){

    const [massa, setMassa] = useState('')
    const [altura, setAltura] = useState('')
    const [imc, setImc] = useState('')

    function calcularimc() {
        setImc( parseInt(massa) / ( parseFloat(altura) * parseFloat(altura)))
    }
    
    return(
        <View>
            <Text>IMC</Text>

            <TextInput
                placeholder="Digite o seu peso"
                value={massa}
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
          onPress={() => calcularimc()}
          />
      </View>

       <Text style={estilos.resultado}>Resultado: {imc} </Text>

       <Text> Menor que 18,5	Magreza	0 </Text>
        <Text>Entre 18,5 e 24,9	Normal	0</Text>
        <Text>Entre 25,0 e 29,9	Sobrepeso	I</Text>
        <Text>Entre 30,0 e 39,9	Obesidade	II</Text>
        <Text>Maior que 40,0	Obesidade Grave	III</Text>
       
       
        </View>    
    ) 
}

const estilos = StyleSheet.create({
  botao: {
    marginVertical: 10
  }
})


