
import React, { Component } from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {firstactions} from '../actions/firstactions';
class LifeCycleClass extends Component {
    constructor(props){
        super(props)
        this.state = {"count":0}
        console.log(`constructor props: ${JSON.stringify(props.route.params.item.id)} initialized state: ${JSON.stringify(this.state)}`);
    }
    static getDerivedStateFromProps(props, state){
        console.log(`getDerivedStateFromProps props: ${JSON.stringify(props.route.params.item.name)} initialized state: ${JSON.stringify(state)}`);
        return state;
    }
    shouldComponentUpdate(){
        console.log(`shouldComponentUpdate ${this.state.count}`);
        return true;
    }

    render() {

        console.log(`render ${this.state.count}`);
        
      return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>{this.state.count}</Text>
            <Text style={{color:'black'}}>{this.props.myname}</Text>
            <TouchableOpacity style={{ borderRadius:10, paddingHorizontal:10, height:50,backgroundColor:'blue', justifyContent:'center'}}
                onPress={this.butnPressed}
            >
            <Text style={{color:'white'}}>{this.props.route.params.item.name}</Text>
            
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius:10, paddingHorizontal:10, height:50,backgroundColor:'blue', justifyContent:'center'}}
                onPress={()=>{this.props.changeName(`${Math.random()}`)}}
            >
            <Text style={{color:'white'}}>{`change name action dispatch`}</Text>
            
            </TouchableOpacity>
        </View>
      );
    }
    componentDidMount(){
        console.log(`componentDidMount : props: ${JSON.stringify(this.props.route.params.item.name)} state: ${JSON.stringify(this.state)}`);
    }

    getSnapshotBeforeUpdate(preProps,preState){
        console.log(`getSnapshotBeforeUpdate:  preProps: ${JSON.stringify(preProps.route.params.item.name)} preState: ${JSON.stringify(preState)}`); 

        return null;
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate : props: ${JSON.stringify(this.props.route.params.item.name)} state: ${JSON.stringify(this.state)}`);
        
    }

    componentDidCatch(){
        console.log(`componentDidCatch`);
    }

    componentWillUnmount(){
        console.log(`componentWillUnmount : props: ${JSON.stringify(this.props.route.params.item.name)} state: ${JSON.stringify(this.state)}`);
    }

    butnPressed = () =>{
        this.setState((state,props)=> { return { count: state.count+1}}, ()=>{
            console.log(`set state callback called ${this.state.count}`);
        });
        console.log(`btn pressed : ${this.state.count}`)
    }
  }
  
  const mapStateToProps = (state)=>{
      return{
        myname:state.name
      }
  }

  const mapDispatchToProps = (dispatch) =>{
      return {
          changeName: (name)=>{
              dispatch(firstactions(name))
          }
      }
  }

export default connect(mapStateToProps,mapDispatchToProps)(LifeCycleClass);