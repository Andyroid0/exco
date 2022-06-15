import { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Avatar from '../Home/components/Avatar';
import Card from '../Home/components/Card';
import Dates_Panel from '../Home/components/DatesPanel';
import Footer from '../Home/components/Footer';
import GetDirections from '../Home/components/buttons/GetDirections';
import Heading from '../Home/components/Heading';
import IconClock from '../Home/components/svg/IconClock';
import IconClose from '../Home/components/svg/IconClose';
import IconHelp from '../Home/components/svg/IconHelp';
import IconMore from '../Home/components/svg/IconMore';
import IconParking from '../Home/components/svg/IconParking';
import IconReceipt from '../Home/components/svg/IconReceipt';
import IndentifyYourVehicle from '../Home/components/buttons/IdentifyYourVehicle';
import mock from '../data/mock';
import routes from "../routes";
import Section from '../Home/components/Section';
import { Spot } from '../Home/components/text/Headings';
import SubHeading from '../Home/components/SubHeading';
import Location_Address from '../Home/components/Location_Address';
import Ticket from '../Home/components/Ticket';



const Home = ( props: { setRoute: (value: routes) => void } ) => {
    const [address, setAddress] = useState<string|null>( mock.address );
    const [end, setEnd] = useState<Date|null>( mock.end );
    const [firstName, setFirstName] = useState<string|null>( mock.firstName );
    const [lastName, setLastName] = useState<string|null>( mock.lastName );
    const [location, setLocation] = useState<string|null>( mock.location );
    const [receiptTotal, setReceiptTotal] = useState<number|null>( mock.receiptTotal );
    const [spot, setSpot] = useState<string|number|null>( mock.spot );
    const [start, setStart] = useState<Date|null>( mock.start );
    const [title, setTitle] = useState<string|null>( mock.title );

  return (
    <ImageBackground style={styles.container} source={ require('../assets/images/bg-map.png') } >

      <View style={{flexDirection: "row"}}>

        <IconClose onPress={ () => console.log("Close...") } style={{ marginLeft: 26, marginTop: "10%" }} />

        <View style={{ flexDirection: "column", marginTop: "3%" }}>
          <Heading text="Nice! Your Monthly parking is Confirmed." />
          <SubHeading text="Your reservation details are below." />
        </View>

      </View>



      <Card>
        <IconParking style={{marginLeft: 16, marginTop: -16}}/>
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

        <Section icon={ <IconHelp/> } label="View parking instructions" />

        <Section icon={ <IconClock/> } label="Purchase additional months" />

        <Section icon={ <IconReceipt/> } label={`View receipt for $${ receiptTotal }`} />


        <Footer 
          avatar={ <Avatar img={ require('../assets/images/profile-picture.jpg') } size={ 40 } /> } 
          firstName={ firstName as string }
          lastName={ lastName as string }
          title={ title as string }
        />
          

      </Card>

        <IndentifyYourVehicle onPress={ () => props.setRoute( routes.camera ) } />

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    location: {
      flexDirection: "row", 
      marginBottom: 15,
      marginTop: 19, 
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

export default Home;