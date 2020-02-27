import React from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function AppBar(props) {
    return(
        <View style={styles.arrow} >
            <TouchableOpacity onPress={() => props.navigate.goBack()}>
                <Icon
                name={Platform.OS === 'ios' ? "ios-arrow-back" : "md-arrow-back" }
                size={32}
                style={{color: 'black'}}
                />
            </TouchableOpacity>
        </View>
    )
}


export default AppBar;

const styles = StyleSheet.create({
   arrow:{
        alignItems: "flex-end",
        paddingRight: 30,
        paddingTop: 16,
       marginBottom:25
   }
});
