
import React from 'react';
import { View,Text } from 'react-native';

 export const withHOC = (WComponent) =>{

    const newComp = () =>{
        return(
            <View style={{backgroundColor:'blue', flex:1}}>
                <WComponent></WComponent>
            </View>
        );

    }

    return newComp;
}





const HocToBeUsed = () =>{

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:20}} >{`name`}</Text>
        </View>
    );
}

export default withHOC(HocToBeUsed);