import React, {Component} from 'react';
import {Platform,Image, StyleSheet, Text, View,FlatList, Alert,RefreshControl} from 'react-native';
import Swipeout from 'react-native-swipeout';
//import Icons from 'react-native-vector-icons'
import AddModal from '../components/addModal';
import FAB from 'react-native-fab'
async function insertNewData(params) {
  

    try {
      const response = await fetch('http://192.168.56.1/getDataReactNative/insert.php',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          },
          body: JSON.stringify(params)
      });
      const mainCourse = await response.json();
      this.setState({data: mainCourse});
    } catch (error) {
      
    }
  }
export default class App extends Component{

  state ={
    data:[],
    isLoadding:false,
  }
//get dữ liệu từ server
  fetchData= async()=>{
    try {
      const response = await fetch('http://192.168.56.1/getDataReactNative/getData.php');
     
      const mainCourse = await response.json();
      this.setState({data: mainCourse});
      //this.setState({isLoadding:true})
    } catch (error) {
      console.error('Không có kết nối');
    }
   

  }
  //post dữ liệu lên sever

 onpressAdd(){
  // alert("heheh")
   this.refs.addModal.showAddModal()
 }
componentDidMount(){
  this.fetchData();
}

  render() {
    
      const swipeoutSetting={
        autoClose:true,
        close:true,
        onClose:()=>{

        },
        onOpen:()=>{
              
        },
        right:[
            {
                onPress:()=>{
                    Alert.alert(
                        'Thông báo',
                        'Bạn có chắc chắn muốn xóa ?',
                        [
                            {
                                text:'Không', onPress: ()=>console.log('Can'),styles: 'cancel'
                            },
                            {
                                text:'Có', onPress: ()=>console.log('Can'),
                                styles:'cancel'
                            }
                        ]
                    )
                },
                text:'DELETE',type: 'delete',
                style:{paddingBottom: 10,margin: '10',}
            },
            {
                onPress:()=>{
                    
                },
                text:'EDIT',
                backgroundColor:'yellow'
            },
        ],
        rowId: this.props.index,
        sectionId:1


      }
    return (
     
      <View >
      
       <FlatList
      refreshing={this.state.isLoadding}
       onRefresh={this.fetchData}
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>
         <View>
          <View>
            <Image
              style={{height:250,width:400}}
              //source={require('../images/food/mon1.jpg')}
             // source={require('{item.image}')}
              source={{ uri:item.image}}
              resizeMode="contain"    
              />   
          </View>
                 
  
          <Swipeout {...swipeoutSetting} >
          
              <View style={{backgroundColor:'#abc123',padding:10,margin:10}}>
                  
                  <Text style={{color:'#fff', fontWeight:'bold'}}>{item.name}</Text>
                  <Text style={{color:'#fff', fontWeight:'bold'}}>{item.about}</Text>
                  <Text style={{color:'#fff', fontWeight:'bold'}}>{item.price}</Text>
                 
              </View>
          </Swipeout>
    
        </View>
       
       }

       />
      <FAB 
        buttonColor="#FFCC00" 
        iconTextColor="#FFFFFF" 
        onClickAction={() => this.onpressAdd()}
        visible={true} 
        />
       <AddModal
        ref={'addModal'}
        parentFlatList={this}
       >

       </AddModal>
      </View>
    
    );
  }
}
export {insertNewData};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});