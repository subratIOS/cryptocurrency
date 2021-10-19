import React, {useEffect, useState, useRef} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { firstactions } from '../actions/firstactions';

const LifeCycleFunctionalComp = ( props,{navigation,route}) =>{

    const [count,setCount] = useState(0);
    const [student,setStudent] = useState({name:'subrat',roll:100});
    const [arrList,setArrList] = useState([0]);
    const refValue = useRef("Subrat");

    const myname = useSelector(state=> state.name);
    const dispatch = useDispatch();

    const changeName = () =>{
        dispatch(firstactions('debu'));
    }

    const changerefValue = () =>{
        refValue.current = "sdfd";
    }

    const singlevalueBtnPressed = () =>{

        changeName();
        console.log(refValue.current);
        setCount(preCount => preCount+1);
        console.log(`singlevalueBtnPressed : ${count}`);
    }

    const objValueBtnPressed = () =>{
        setStudent({...student,name:'susa'});
        console.log(`objValueBtnPressed : ${JSON.stringify(student)}`);
    }

    const arrValueBtnPressed = () =>{
        setArrList([...arrList, Math.round(Math.random() *10)]);
        console.log(`arrValueBtnPressed : ${JSON.stringify(arrList)}`);
    }

    useEffect(()=>{
        console.log("useeffect");
        return(()=>{
            console.log("use effect will unmount");
        });
    });
    useEffect(()=>{
        console.log('useeffect component did mount')
        return(()=>{
            console.log("use effect did mount will unmount");
        });
    },[]);

    useEffect(()=>{
        console.log('useeffect component did update');
        return(()=>{
            console.log("use effect did update will unmount");
        });
    },[count]);

    console.log(`func comp called: ${count}`);
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'black'}}>{myname}</Text>
            <Text>{count}</Text>
            <Text>{`Name: ${student.name} Roll: ${student.roll}`}</Text>
            { arrList.map((item)=>{
                return (<Text>{item}</Text>)
            })}
            <TouchableOpacity 
            style={{ borderRadius:10, paddingHorizontal:10, height:50,backgroundColor:'blue', justifyContent:'center'}}
                onPress={()=>singlevalueBtnPressed()}
            >
            <Text style={{color:'white'}}>{`useState single value`}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{ borderRadius:10, paddingHorizontal:10, height:50,backgroundColor:'red', justifyContent:'center'}}
                onPress={()=>objValueBtnPressed()}
            >
            <Text style={{color:'white'}}>{'useState object update'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{ borderRadius:10, paddingHorizontal:10, height:50,backgroundColor:'green', justifyContent:'center'}}
                onPress={()=>arrValueBtnPressed()}
            >
            <Text style={{color:'white'}}>{'useState Array update'}</Text>
            </TouchableOpacity>
        </View>
      );

   
}

// const mapStateToProps = (state)=>{
//     return{
//         myname:state.name
//     }
// }

export default LifeCycleFunctionalComp;