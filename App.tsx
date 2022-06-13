import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import 'typeface-rubik';

import Avatar from './components/Avatar';
import Card from './components/Card';
import Divider from './components/Divider';
import GetDirections from './components/buttons/GetDirections';
import Heading from './components/Heading';
import IconMore from './components/svg/IconMore';
import IconDirections from './components/svg/IconDirections';
import { Spot } from './components/text/Headings';
import SubHeading from './components/SubHeading';
import Location_Address from './components/Location_Address';

const App = () => {

  const [address, setAddress] = useState<string|null>("15714 Melrose Ave, Beverly Hills, CA 90201");
  const [location, setLocation] = useState<string|null>("Fells Wargo’s Parking Lot");
  const [spot, setSpot] = useState<string|number|null>(21);


  return (
    <ImageBackground style={styles.container} source={ require('./assets/images/bg-map.png') } >

      <Heading text="Nice! Your Monthly parking is Confirmed." />
      <SubHeading text="Your reservation details are below." />

      <Card>

        <View style={ styles.location } >

          <Location_Address location={ location as string } address={ address as string } />
          <IconMore onPress={ () => console.log("Do Something.") }/>

        </View>

        <View style={ styles.getDirections } >

          <Spot style={ styles.spot }> SPOT {spot} </Spot>
          <GetDirections onPress={ () => console.log("...") } />
        </View>

        <Divider style={styles.dashed} orientation="horizontal" variant="dashed" />
        <Avatar img={ require('./assets/images/profile-picture.jpg') } size={ 60 } />

      </Card>

        <StatusBar style="auto" />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashed: {
    marginTop: 30,
    marginBottom: 12
  },
  location: {
    flexDirection: "row", 
    marginBottom: 15,
    marginTop: 44, 
    height: 38
  },
  spot: {
    marginLeft: 0
  },
  getDirections: {
    flexDirection: "row",
    marginLeft: 26
  }
});

export default App;
