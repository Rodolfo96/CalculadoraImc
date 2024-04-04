import React, {useState} from "react"
import {TextInput,
    Text,
    View, 
    TouchableOpacity, 
    Vibration, 
    Keyboard, 
    Pressable,
                        } from "react-native"

import ResultImc from "./ResultImc/index"
import styles from "./style"

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [errorMessageWeight, setErrorMessageWeight]= useState(null)
const [errorMessageHeight, setErrorMessageHeight]= useState(null)

function imcCalculator(){
    let heightFormat = height.replace(",",".")
    return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
}

function verificationImc(){
  if(height == null && weight !=null){
    Vibration.vibrate();
    setErrorMessageWeight("")
    setErrorMessageHeight("Campo Obrigatório*")
  } else if(height != null && weight ==null){
    Vibration.vibrate();
    setErrorMessageHeight("")
    setErrorMessageWeight("Campo Obrigatório*")
  } else {
    Vibration.vibrate();
    setErrorMessageHeight("Campo Obrigatório*")
    setErrorMessageWeight("Campo Obrigatório*")
  }
}

function validationImc(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular Novamente")
      setErrorMessageWeight(null)
      setErrorMessageHeight(null)
      return
    }
    verificationImc()
    setHeight(null)
    setWeight(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")

}
      return(
      <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessageHeight}</Text>
            <TextInput style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex.: 1.75"
                keyboardType="numeric" 
                />

            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessageWeight}</Text>
            <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex.: 75.36"
                keyboardType="numeric" 
                />
          <TouchableOpacity 
          style={styles.buttomCalcultor}
          onPress={() => {validationImc()}}   
          >
            <Text style={styles.textButtomCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}
        />
        </Pressable>
   );
}

    

