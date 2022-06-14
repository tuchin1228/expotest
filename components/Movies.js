import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View ,Button} from 'react-native';

const NavigateToHome = props =>{
    props.navigation.navigate('Home')
}

const MoviesScreen =  (props)  =>{
    return (
      <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
        
          <Button title="Go to Home" onPress={()=>NavigateToHome(props)}></Button>
          
      </View>
    )
  }
  
export default MoviesScreen;
  