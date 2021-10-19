
import React from 'react';
import {View,Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


const data = [
    {name:'Open Camera',id:'1'},
    {name:'Navigate to next page',id:'2'},
    {name:'Navigate to next page with props',id:'3'},
    {name:'HOC',id:'4'},
    {name:'api call',id:'5'},
    {name:'deep copy shallow copy',id:'6'},
    {name:'redux',id:'7'},
    {name:'reduce func',id:'8'},
    {name:'lifecycle class component',id:'9'},
    {name:'LifeCycleFunctionalComp',id:'10'},
    {name:'...',id:'11'},
    {name:'....',id:'12'},
    {name:'.....',id:'13'},
    {name:'......',id:'14'}
];



const Details = ({ navigation })=>{

    const cellPressed = (item) => {
        console.log(`${item.id} is clicked`);
        
        switch (item.id) {
            case '4' :
                navigation.navigate('HocToBeUsed');
                break;
            case '9' :
                navigation.navigate('LifeCycleClass',{item});
                break;
            case '10' :
                navigation.navigate('LifeCycleFunctionalComp',{item});
                break;
            default :
                navigation.navigate('MoreDetails',{item});
                break;

        }
    }
    
    const DetailCard = (item)=>{
        return(
            <TouchableOpacity activeOpacity={0.8} style={styles.cellContainer} onPress={()=>cellPressed(item.item)}>
                <Text style={styles.cellTxt}>{item.item.name}</Text>
            </TouchableOpacity>
        );
    }

    const HeaderOfFlatList = () =>{
        return(
            <View style={{height:50,backgroundColor:'yellow', justifyContent:'center',alignItems:'center'}} >
                <Text style={{fontSize:30}}>Header</Text>
            </View>
        );
    }
    const FooterOfFlatList = () =>{
        return(
            <View style={{height:100,backgroundColor:'orange'}} ></View>
        );
    }
    const separator = () => {

        return(
            <View style={{height:1, marginHorizontal:10, backgroundColor:'black'}}></View>
        );
    }

    return(

        <View style={{flex:1, backgroundColor:'#d3d3d3d3'}}>
        <FlatList 
        data={data} 
        renderItem={DetailCard}  
        horizontal={false}  
        contentContainerStyle={{justifyContent:'center',flexGrow:1}} 
        ItemSeparatorComponent = {separator}
        ListHeaderComponent ={HeaderOfFlatList}
        ListFooterComponent = {FooterOfFlatList}
        stickyHeaderIndices={[0]}
        ></FlatList>
        </View>
    )
}

export default Details



const styles = StyleSheet.create(
    {
        cellContainer:{ 
            backgroundColor:'white',
            padding: 10
        },
        cellTxt:{
            color:'black',
            fontFamily:'arial',
            fontWeight:'100',
            fontSize:18
        }
    }
);