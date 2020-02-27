import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image,
    ScrollView,
} from 'react-native';
import AppBox from '../component/AppBox';
import AppBar from '../component/AppBar';
import {connect} from 'react-redux';
import styles from '../styles/AppStyle'
import {favoriteMovies} from '../redux/actions/main_actions';
import {Button} from 'react-native-elements';


function MovieDetails (props) {
    const item = props.navigation.getParam('item');

    const addItem = (item) =>{
        props.favoriteMovies([...props.main.favoriteMovies,item]);
        // alert('The movie has been added to your Favorite Movies');
    };

    const deleteItem = (item)=>{
        const newData = props.main.favoriteMovies.filter(value => value.title !== item.title);
        // alert('The movie has been deleted from your Favorite Movies');
        props.favoriteMovies(newData)
    };

    const buttonItem = () => {
        if (props.main.favoriteMovies.some(value => value.title === item.title)) {
            return <Button
                        onPress={()=> deleteItem({title: item.title, poster: item.poster_path})}
                        icon={{name: 'minus-circle', type: 'font-awesome'}}
                        title='Remove from my favorites movies' />;
        } else {
            return <Button
                        onPress={() => addItem({title: item.title, poster: item.poster_path})}
                        icon={{name: 'plus-circle', type: 'font-awesome'}}
                        title='Add to my favorites movies' />;
        }
    };

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.screen_2} >
        <AppBar navigate={props.navigation}/>
        <AppBox >
        <ScrollView>
            <View style={{alignItems:'center'}}>
                <Text style={styles.h1}>
                    {item.title}
                </Text>
                <Image
                style={{width: 200, height: 300}}
                source={{uri: "https://image.tmdb.org/t/p/w500/"+item.poster_path}}
                />
                <Text style={{...styles.h2, margin:10}}>
                    {item.overview}
                </Text>
                <View style={{flexDirection:'row-reverse', alignItems:'center', marginTop:10}}>
                    <Text style={{...styles.h3, fontSize:18}}>
                        Rating:{item.vote_average}
                    </Text>
                    <Image style={{top:2, width:30, height:30}} source={require('../assets/icons/ic_rating.png')}/>
                </View>
                <View style={{marginTop:10}}>
                    {buttonItem()}
                </View>
            </View>
            </ScrollView>
        </AppBox>
    </SafeAreaView>
    </>
    );
}


const mapStateToProps = state => {
    return{
        main: state.main_reducers
    }
};

export default connect(mapStateToProps,{favoriteMovies})(MovieDetails);
