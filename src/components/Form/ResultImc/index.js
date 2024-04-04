import React from "react"
import {Text, View, TouchableOpacity, Share} from "react-native"
import styles from "./style"

export default function ResultImc(props){


    return(
      <View style={styles.resultx}>
       
        <Text style={styles.informationx}> {props.messageResultImc} </Text>
        <Text style={styles.numberx}> {props.resultImc} </Text>
      </View>
    );

}
