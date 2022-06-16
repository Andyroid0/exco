import { Path, Svg } from 'react-native-svg';
import { StyleProp } from 'react-native';
import styled from 'styled-components/native';

const Component = styled.View `
    width: 24px;
    height: 24px;
    border-radius: 100px;
    background: #000;
    justify-content: center;
    align-items: center;
`;

const IconClock = ( props: { style?: StyleProp<any> } ) => (

    <Component>
        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" >
            <Path d="M5.995 1C3.235 1 1 3.24 1 6C1 8.76 3.235 11 5.995 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 5.995 1ZM6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 8.21 8.21 10 6 10Z" fill="#F6C62D"/>
            <Path d="M6.25 3.5H5.5V6.5L8.125 8.075L8.5 7.46L6.25 6.125V3.5Z" fill="#F6C62D"/>
        </Svg>
    </Component>
);

export default IconClock;


