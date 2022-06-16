import styled from 'styled-components/native';
import IconDirections from '../../../Components/svg/IconDirections';
import { LinkLabel } from '../text/Button';
import { View } from 'react-native';

const Component = styled.Pressable `
    height: 14px;
    width: auto;
    flex-direction: row;
    margin-left: 22px;

`;

const GetDirections = (props: {onPress: () => void }) => (
    <Component onPress={ props.onPress }>
        <IconDirections/>
        <View style={{width: 8}}/>
        <LinkLabel style={{marginTop: "auto", marginBottom: "auto"}}>Get Directions</LinkLabel>
    </Component>
);

export default GetDirections;