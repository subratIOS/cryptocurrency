
import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const Home = ({ navigation })=>{

    return(
        <View style={{flex:1, backgroundColor:'yellow', justifyContent:'center', alignItems:'center'}} >
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Details')}     style={styles.btn}>
                <Text style={{color:'white', fontSize:16}}>Go to Details</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home




const styles = StyleSheet.create(
    {
        btn:{
            backgroundColor:'grey', 
            width:'80%',
            height:60,
            justifyContent:'center', 
            alignItems:'center',
            borderRadius:10
        }
    }
);