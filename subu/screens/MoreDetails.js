import React from 'react';
import {View,Text} from 'react-native';
import withHOC from './withHOC'

const MoreDetails = (props) =>{
    const {navigation,route} = props;

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:20}} >{`${route.params.item.name}`}</Text>
        </View>
    );
}

export default MoreDetails;