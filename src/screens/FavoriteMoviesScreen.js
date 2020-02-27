import React, {useEffect} from 'react';
import {
    SafeAreaView,
    FlatList,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import AppBox from '../component/AppBox';
import AppBar from '../component/AppBar';
import styles from '../styles/AppStyle'
import {connect} from 'react-redux';
import {favoriteMovies} from '../redux/actions/main_actions';


function FavoriteMovies (props) {
  const {navigate} = props.navigation;

  useEffect(()=>{
      if(props.main.favoriteMovies.length === 0){
          navigate('Movies')
      }
    },[props.main.favoriteMovies]);

  const deleteItem = (item)=>{
        const newData = props.main.favoriteMovies.filter(value => value.title !== item.title);
        props.favoriteMovies(newData)
    };

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.screen_2} >
        <AppBar navigate={props.navigation}/>
            <AppBox stl={{marginBottom:40, flexDirection:'row-reverse', justifyContent:'center'}}>
               <Image style={{width:30, height:30}} source={require('../assets/icons/ic_favorite.png')}/>
               <Text style={{...styles.h2, textAlign:'center', fontSize:23}}>
                   My Favorite Movies
               </Text>
               <Image style={{width:30, height:30}} source={require('../assets/icons/ic_favorite.png')}/>
            </AppBox>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={props.main.favoriteMovies}
                renderItem={({item}) =>
                    <ScrollView>
                        <AppBox stl={{margin:5, flexDirection:'row-reverse', alignItems:'center'}}>
                            <Text style={{...styles.h3,width:"70%"}}>
                                {item.title}
                            </Text>
                            <Image
                                style={{width:40, height:60}}
                                source={{uri: "https://image.tmdb.org/t/p/w500/"+item.poster}}
                            />
                            <View style={{marginRight:"12%"}}>
                                <TouchableOpacity onPress={() => deleteItem(item)}>
                                    <Image style={{width:35, height:35}} source={require('../assets/icons/ic_trash.png')}/>
                                </TouchableOpacity>
                            </View>
                        </AppBox>
                    </ScrollView>
                }
        />
    </SafeAreaView>
    </>
    );
}

const mapStateToProps = state => {
    return{
        main: state.main_reducers
    }
};


export default connect(mapStateToProps,{favoriteMovies})(FavoriteMovies);

