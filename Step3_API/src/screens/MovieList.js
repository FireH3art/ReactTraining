import { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from "axios";

const MovieDetails = ({ items, navigation }) => {
    const url = "https://image.tmdb.org/t/p/original"
    return (
        <TouchableOpacity style={{ width: "90%", alignSelf: "center", flexDirection: "row", padding: 15, marginTop: "3%", borderWidth: 1, backgroundColor:"white" }}
            onPress={ () => navigation.navigate("MovieDetail",{items:items})}>
            <View style={{ flex:1,justifyContent:"center" }}>
                <Image source={{ uri: url + items?.poster_path }} style={{height:undefined,width:"100%",aspectRatio:0.66,borderRadius:15}}/>
            </View>

            <View style={{ flex: 2, padding: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>{items?.original_title}</Text>

                <Text style={styles.textDesc}>{items?.overview}</Text>

                <Text style={styles.textDesc}>Release Date: {items?.release_date}</Text>

                <Text style={[styles.textDesc,{color:items?.adult?"red":"green"}]}>{items?.adult?"Rated R(18+)":"G (All Ages)"}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function MovieList({ navigation }) {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        MovieList()
    }, [])

    const MovieList = () => {
        const API_URL = "https://api.themoviedb.org/3/movie/popular"
        const API_KEY = "af7b33c793459aada884bbfa32dd1d55"
        const PARAMS = "page=1"
        const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

        axios({
            method: 'get',
            url: BASE_URL
        })
            .then(function (response) {
                setMovieList(response.data.results)
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={movieList}
                renderItem={({ item, index }) => <MovieDetails items={item} navigation={navigation}/>}
                keyExtractor={(item, index) => {
                    return item + index;
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    textDesc:{
        fontSize: 10, 
        marginTop: 5
    }
});