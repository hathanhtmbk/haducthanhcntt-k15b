import React, {Component} from "react";
import {Button,View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Modal from 'react-native-modalbox';

import {insertNewData} from '../screens/MainCourse';
//import Btn from 'react-native-button'
var screen =Dimensions.get('window');
export default class addModal extends Component{
    constructor(props){
        super(props);
        this.state={
           
            name:'',
            about:'',
            price:'',
        }
    }
    showAddModal=()=>{
        this.refs.myModal.open();
    }
    generateKey=(numberOfCharacters)=>{
        return require('random-string')({length:numberOfCharacters});
    }
    
    render(){
        return(
            <Modal
            style={styles.modalSty}
                ref={"myModal"}
                position='center'
                backdrop={true}
                // onClosed={()=>{
                //     alert("Close"); 
                // }}
            >
                <View style={{flex:1}}>
                <Text style={styles.textSty}>THÊM MÓN ĂN MỚI</Text>
                </View>
                <View style={{flex:3}}>

                <TextInput style={styles.inputSty}
                    onChangeText={(text)=>this.setState({name:text})}
                    placeholder="Nhập tên món ăn"
                    value={this.state.name}
                >

                </TextInput>
                
                <TextInput style={styles.inputSty}
                onChangeText={(text)=>this.setState({about:text})}
                     placeholder="Nhập thông tin"
                     value={this.state.about}
                >

                </TextInput>
                <TextInput style={styles.inputSty}
                onChangeText={(text)=>this.setState({price:text})}
                     placeholder="Nhập giá"
                     value={this.state.price}
                >

                </TextInput>
                </View>
                <View style={{flex:1,}}>
                <Button
                    
                    title="Thêm"
                    color="#1E90FF"
                    style={{paddingLeft:50,marginRight: 50,}}
                    onPress={()=>{
                        if(this.state.name.length==0||this.state.about.length==0||this.state.price.length==0){
                            alert("Bạn phải nhập đầy đủ thông tin");
                            return;
                        }else{

                        const newkey=this.generateKey(24);
                        const newFood={
                            key:newkey,
                            name:this.state.name,
                            about:this.state.about,
                            price:this.state.price,
                        }
                       
                        insertNewData(newFood);
                        console.log(newFood);
                        this.refs.myModal.close();
                    }
                    }}
                />
                   
                </View>
            </Modal>
        );
    }
}
const styles=StyleSheet.create({
    modalSty:{
        justifyContent:"center",
        borderRadius:20,
        shadowRadius:30,
        width: screen.width-50,
        height:300,
        backgroundColor:'#CCFFCC'
    },
    textSty:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"black"
        //paddingTop:0
    },
    inputSty:{
        
        height:40,
        margin:10,
        borderBottomWidth:1,
        borderBottomColor:'gray'

    },
   
})