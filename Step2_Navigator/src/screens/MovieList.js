import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MovieDetails = ({ items, navigation }) => {
    return (
        <TouchableOpacity style={{ width: "90%", alignSelf: "center", flexDirection: "row", padding: 15, marginTop: "3%", borderWidth: 1, backgroundColor:"white" }}
            onPress={ () => navigation.navigate("MovieDetail",{items:items})}>
            <View style={{ flex:1,justifyContent:"center" }}>
                <View style={{height:undefined,width:"100%",aspectRatio:0.66,borderRadius:15,backgroundColor:"grey"}}/>
            </View>

            <View style={{ flex: 2, padding: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>{items.name}</Text>

                <Text style={styles.textDesc}>Overview</Text>

                <Text style={styles.textDesc}>Release Date: 8/9/2023</Text>

                <Text style={[styles.textDesc,{color:items?.adult?"red":"green"}]}>{items?.adult?"Rated R(18+)":"G (All Ages)"}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function MovieList({ navigation }) {

    const [movieList, setMovieList] = useState([{name:"Star Wars",adult:false}])

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