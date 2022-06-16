import { useMemo, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Avatar from '../Home/components/Avatar';
import Card from '../Home/components/Card';
import Dates_Panel from '../Home/components/DatesPanel';
import Footer from '../Home/components/Footer';
import GetDirections from '../Home/components/buttons/GetDirections';
import Heading from '../Home/components/Heading';
import IconClock from '../Components/svg/IconClock';
import IconClose from '../Components/svg/IconClose';
import IconHelp from '../Components/svg/IconHelp';
import IconMore from '../Components/svg/IconMore';
import IconParking from '../Components/svg/IconParking';
import IconReceipt from '../Components/svg/IconReceipt';
import IndentifyYourVehicle from '../Home/components/buttons/IdentifyYourVehicle';
import mapStyle from '../data/mapStyle';
import MapView, { PROVIDER_GOOGLE, MapStyleElement } from 'react-native-maps';
import mock from '../data/mock';
import routes from "../routes";
import Section from '../Home/components/Section';
import { Spot } from '../Home/components/text/Headings';
import styled from 'styled-components/native';
import SubHeading from '../Home/components/SubHeading';
import Location_Address from '../Home/components/Location_Address';
import Ticket from '../Home/components/Ticket';


const OverLay = styled.View `
    width: 100%;
    height: 100%;
    background: #F2C840;
    opacity: .8;
    position: absolute;
    left: 0;
    top: 0;
`;

const Header = styled.View `
    flex-direction: row; 
    margin-top: auto; 
    margin-bottom: auto;
`;

const Page = styled.View `
    padding-top: 3%; 
    flex: 1;
`;

const Home = ( props: { setRoute: (value: routes) => void, apiKey: string } ) => {

    const [address, setAddress] = useState<string|null>( mock.address );
    const [coordinates, setCoordinates] = useState<number[]|null>(null);
    const [end, setEnd] = useState<Date|null>( mock.end );
    const [errorMsg, setErrorMsg] = useState<string|null>(null);
    const [firstName, setFirstName] = useState<string|null>( mock.firstName );
    const [lastName, setLastName] = useState<string|null>( mock.lastName );
    const [ loading, isLoading ] = useState<boolean>(true);
    const [location, setLocation] = useState<string|null>( mock.location );
    const [receiptTotal, setReceiptTotal] = useState<number|null>( mock.receiptTotal );
    const [spot, setSpot] = useState<string|number|null>( mock.spot );
    const [start, setStart] = useState<Date|null>( mock.start );
    const [title, setTitle] = useState<string|null>( mock.title );

    const prepareAddress = (address: string) => {
        let res = address.replaceAll(' ', '+');
        return res;
    };

    const getCoords = async ( address: string ) => {
        const res = prepareAddress( address );
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${res}&key=${props.apiKey}`)
          .then( res => res.json() )
          .then( json => {
            return setCoordinates( [json.results[0].geometry.location.lat, json.results[0].geometry.location.lng] );
          })
          .then( () => isLoading(false) )
          .catch( e => console.error(e));
    };

    useMemo( () => getCoords(address as string), [])
    

    if( loading ) {
        return (
            <View style={{flex: 1, justifyContent: "center", marginLeft: "auto", marginRight: "auto"}}>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            
            <MapView 
                region={{ latitude: coordinates![0], longitude: coordinates![1], latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} 
                provider={PROVIDER_GOOGLE} 
                style={styles.map} 
                customMapStyle={mapStyle as MapStyleElement[]} 
            />

            <OverLay/>

            <Page>
                <Header>

                    <IconClose 
                        color="black" 
                        onPress={ () => console.log("Close...") } 
                        style={ styles.close } 
                    />

                    <View style={ styles.header_container }>
                        <Heading text="Nice! Your Monthly parking is Confirmed." />
                        <SubHeading text="Your reservation details are below." />
                    </View>

                </Header>

                <Card>

                    <IconParking style={ styles.parking }/>

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

            </Page>
        </View>
    );
};

const styles = StyleSheet.create({

    close: {
        marginLeft: 26, 
        marginTop: "10%"
    },
    container: {
      flex: 1,
    },
    getDirections: {
        flexDirection: "row",
        marginLeft: 26
    },
    header_container: {
        flexDirection: "column", 
        marginTop: "4%"
    },    
    location: {
      flexDirection: "row", 
      marginBottom: 15,
      marginTop: 19, 
      height: 38
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: "absolute",
        left: 0,
        top: 0,
        
    },
    parking: {
        marginLeft: 16, 
        marginTop: -16
    },    
    spot: {
      marginLeft: 0
    },
  });

export default Home;