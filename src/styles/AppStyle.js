import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#FFF',
    },
    screen_2:{
        flex:1,
        backgroundColor:'#d4eaff',
    },
    button_add:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row-reverse',
        backgroundColor:'#9dceff',
        borderRadius: 4,
        marginTop:20
    },
    h1:{
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: 0.996,
        color: '#66788A',
        flexDirection:'row-reverse',
        marginBottom:25,
        textAlign:'center',
    },
    h2:{
        color:'rgba(42,47,57,0.75)',
        textShadowColor:'rgba(102,120,138,0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        fontSize:15,
    },
    h3:{
        fontStyle: 'normal',
        fontWeight: 'bold',
        color:'rgba(97,118,83,0.75)',
        fontSize:18
    },
});

export default styles;
