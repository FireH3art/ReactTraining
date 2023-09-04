import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MovieDetail({ route, navigation }) {

    const items = route.params.items
    const url = "https://image.tmdb.org/t/p/original"

    const ratedR="https://icon-library.com/images/2018/10908474_rated-r-logo-rated-r-logo-2-black.png"
    const G="https://officialpsds.com/imageview/r5/jm/r5jmp5_large.png?1521316481"

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={{ flex: 1, width: "90%", alignSelf: "center", marginTop: "3%", borderWidth: 1, borderRadius: 15, padding: "3%" }}>
                    <Image source={{ uri: url + items?.poster_path }} style={{ height: undefined, width: "100%", aspectRatio: 0.66 }} />
                </View>

                <View style={{paddingHorizontal:"5%"}}>
                    <Text style={{fontSize:20,fontWeight:"bold",textDecorationLine:"underline",marginTop:5}}>{items?.original_title}</Text>
                    <Text style={styles.textDesc}>{items?.overview}</Text>

                    <Text style={[styles.textDesc,{fontWeight:"bold"}]}>Release Date: <Text style={{fontWeight:"normal"}}>{items?.release_date}</Text></Text>
                    <Text style={[styles.textDesc,{fontWeight:"bold"}]}>Ratings: <Text style={{fontWeight:"normal"}}>{items?.vote_average}({items?.vote_count})/10</Text></Text>
                    <Text style={[styles.textDesc,{fontWeight:"bold"}]}>Language: <Text style={{fontWeight:"normal"}}>{items?.original_language}</Text></Text>

                    <Image source={{ uri: items?.adult?ratedR:G }} style={{ height: undefined, width: "100%", aspectRatio: 4.5,marginTop:15 }} />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textDesc:{
        fontSize: 14, 
        marginTop: 5
    }
});