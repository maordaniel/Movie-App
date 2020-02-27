import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import AppBox from '../component/AppBox';
import AppBar from '../component/AppBar';
import styles from '../styles/AppStyle'
import {GetData} from '../services/api';
import {connect} from 'react-redux';
import {favoriteMovies} from '../redux/actions/main_actions';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';


function MoviesScreen (props) {
    const {navigate} = props.navigation;
    const [movieList, setMovieList] = useState([]);

    useEffect( ()=>{
        getMovies()
    },[]);

    const getMovies = async () =>{
        try {
            const res = await GetData();
            setMovieList(res)
        }catch (e) {
            console.log(e)
        }

    };

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.screen_2} >
        <AppBar navigate={props.navigation}/>
        <View style={{flex:1,height:hp('100%')}}>
            <AppBox stl={{marginBottom:40, flexDirection:'row-reverse', justifyContent:'center'}}>
               <Image style={{width:30, height:30}} source={require('../assets/icons/ic_movies.png')}/>
               <Text style={{...styles.h2, textAlign:'center', fontSize:23}}>
                   Most Popular Movies
               </Text>
               <Image style={{width:30, height:30}} source={require('../assets/icons/ic_movies.png')}/>
            </AppBox>
            <AppBox stl={{height:hp('45%')}}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={movieList}
                renderItem={({item}) =>
                    <ScrollView>
                        <AppBox stl={{margin:5}}>
                            <TouchableOpacity onPress={()=> navigate('Details', {item:item})}>
                                <Text style={{...styles.h3, fontSize:15}}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        </AppBox>
                    </ScrollView>
                }
            />
            </AppBox>
            <View style={{position: 'absolute', bottom: 10,width:'100%'}}>
                <TouchableOpacity onPress={() => props.main.favoriteMovies.length > 0 ? navigate('Favorite'):
                    alert('Please add movie to your favorites!')}>
                    <AppBox stl={{backgroundColor:'#aebe8a'}}>
                        <Text style={{...styles.h2, fontSize:20, textAlign:'center'}}>
                            Favorite Movies
                        </Text>
                    </AppBox>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    </>
    );
}

const mapStateToProps = state => {
    return{
        main: state.main_reducers
    }
};

export default connect(mapStateToProps,{favoriteMovies})(MoviesScreen);
