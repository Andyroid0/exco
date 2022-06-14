import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Avatar from './components/Avatar';
import Card from './components/Card';
import Dates_Panel from './components/DatesPanel';
import Divider from './components/Divider';
import GetDirections from './components/buttons/GetDirections';
import Heading from './components/Heading';
import IconMore from './components/svg/IconMore';
import IconDirections from './components/svg/IconDirections';
import { Spot } from './components/text/Headings';
import SubHeading from './components/SubHeading';
import Location_Address from './components/Location_Address';
import Ticket from './components/Ticket';

import { 
  useFonts, 
  Rubik_300Light, 
  Rubik_300Light_Italic, 
  Rubik_400Regular, 
  Rubik_400Regular_Italic, 
  Rubik_500Medium, 
  Rubik_500Medium_Italic, 
  Rubik_600SemiBold,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic,
} from '@expo-google-fonts/rubik';

const App = () => {

  let [ fontsLoaded ] = useFonts({
    Rubik_300Light, 
    Rubik_300Light_Italic, 
    Rubik_400Regular, 
    Rubik_400Regular_Italic, 
    Rubik_500Medium, 
    Rubik_500Medium_Italic, 
    Rubik_600SemiBold,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic
  });

  const [address, setAddress] = useState<string|null>("15714 Melrose Ave, Beverly Hills, CA 90201");
  const [location, setLocation] = useState<string|null>("Fells Wargo’s Parking Lot");
  const [spot, setSpot] = useState<string|number|null>(21);
  const [start, setStart] = useState<Date|null>( new Date() );
  const [end, setEnd] = useState<Date|null>( new Date() );


  if ( !fontsLoaded ) {
    return <Text>Loading...</Text>;
  }

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

        <Ticket/>
        
        <Dates_Panel start={ start as Date } end={ end as Date } />

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
