import { StyleProp, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button_text } from '../text/Button';
import IconCamera from '../../../Components/svg/IconCamera';

const Component = styled.Pressable `
    background: #000;
    box-shadow: 0px 2px 12px rgba( 0, 0, 0, 0.13 );
    border-radius: 24px;
    margin-left: 4%;
    margin-right: 4%;
    margin-top: auto;
    margin-bottom: 6.5%;
    height: 60px;
    flex-direction: row;
`;

const IndentifyYourVehicle = ( props: { onPress: () => void, style?: StyleProp<any>, } ) => (

    <Component onPress={ props.onPress } >
        <IconCamera style={ styles.cam } color="#F6C62D" />
        <Button_text style={ styles.txt } >Identify your vehicle</Button_text>
    </Component>
);

const styles = StyleSheet.create({
    cam: {
        marginLeft: 22,
        marginBottom: 22,
        marginTop: 20
    },
    txt: {
        marginTop: 19,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto"
    }
});

export default IndentifyYourVehicle;


