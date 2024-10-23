import React  from 'react';
import {Text, View, StatusBar, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AllMovie = ({title,year,icon_name,poster}) => {
  return (
      <View>
          <Image source={poster} style={{width:400,height:500}}/>
          <Text>{title}{year}</Text>
          <Icon name={icon_name} color="navy"/>
      </View>
  )
};

const App = () => {
  return (
      <ScrollView>
          <StatusBar hidden={false}/>
          <AllMovie title="Doctor Sleep" year=" 2019" icon_name="qrcode" poster={require('./img/doctor-sleep.jpg')}/>
          <AllMovie title="Midway" year=" 2020" icon_name="qrcode" poster={require('./img/midway.jpg')}/>
      </ScrollView>
  )
};

export default App;
