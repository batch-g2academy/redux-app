import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, removeMovie } from '../redux/actions/movieAction';

export default function MovieScreen() {
 const dispatch = useDispatch();

 //untuk mengambil data pada store menggunakan hooks useSelector
 const movies = useSelector(state => state.movies)   
 
 useEffect(() => {
    dispatch(getMovie())
 }, []);

 const deleteMovie = (id) => {
   fetch(`http://movie-app-g2.herokuapp.com/movies/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
   })
   .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            console.log(response);
            throw Error('err')
        }
   })
   .then(data => {
        dispatch(removeMovie({ id: id }))
   })
   .catch(err => {
        console.log(err);
   })
 }


  return (
    <SafeAreaView>
      <ScrollView>
        { movies.map(movie => (
            <View key={movie._id}>
                <Text>{movie.title}</Text>
                <View>
                    <TouchableOpacity onPress={() => deleteMovie(movie._id)}>
                        <Text>DELETE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}