import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View ,Button} from 'react-native';

const NavigateToMovies = props =>{
    props.navigation.navigate('Movies')
}

const HomeScreen =  (props)  =>{
    return (
      <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
          <Button title="Go to Movies" onPress={()=>NavigateToMovies(props)}></Button>
      </View>
    )
  }
  
export default HomeScreen;
  