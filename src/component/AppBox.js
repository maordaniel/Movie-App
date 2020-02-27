import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

function AppBox(props) {
    return(
        <SafeAreaView>
            <View style={{...styles.card, ...props.stl}}>
                {props.children}
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
   card: {
       shadowColor: 'black',
       shadowOffset: {width: 0, height: 2},
       shadowRadius: 6,
       shadowOpacity: 0.26,
       backgroundColor: 'white',
       elevation: 5,
       padding: 20,
       borderRadius: 10,
       marginHorizontal:20,
   },

});

export default AppBox;
