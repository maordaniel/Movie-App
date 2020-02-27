import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import FavoriteMovies from '../screens/FavoriteMoviesScreen';

const MainNavigator = createStackNavigator( {
    Home: HomeScreen,
    Movies: MoviesScreen,
    Details: MovieDetailsScreen,
    Favorite: FavoriteMovies,
},{initialRouteName:'Home',defaultNavigationOptions: {headerShown:false}});

const RootContainer = createAppContainer(MainNavigator);
export default RootContainer;
