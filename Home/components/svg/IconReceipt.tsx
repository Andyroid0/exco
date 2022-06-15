import { Path, Svg, Line } from 'react-native-svg';
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

const IconReceipt = ( props: { style?: StyleProp<any> } ) => (
    
    <Component>
        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <Path d="M2.60355 2.10355L3 1.70711L3.39645 2.10355L3.75 2.45711L4.10355 2.10355L4.5 1.70711L4.89645 2.10355L5.25 2.45711L5.60355 2.10355L6 1.70711L6.39645 2.10355L6.75 2.45711L7.10355 2.10355L7.5 1.70711L7.89645 2.10355L8.25 2.45711L8.60355 2.10355L9 1.70711L9.39645 2.10355L9.75 2.45711L10 2.20711V9.79289L9.75 9.54289L9.39645 9.89645L9 10.2929L8.60355 9.89645L8.25 9.54289L7.89645 9.89645L7.5 10.2929L7.10355 9.89645L6.75 9.54289L6.39645 9.89645L6 10.2929L5.60355 9.89645L5.25 9.54289L4.89645 9.89645L4.5 10.2929L4.10355 9.89645L3.75 9.54289L3.39645 9.89645L3 10.2929L2.60355 9.89645L2.25 9.54289L2 9.79289V2.20711L2.25 2.45711L2.60355 2.10355Z" stroke="#F6C62D"/>
            <Line x1="4" y1="4.5" x2="8" y2="4.5" stroke="#F6C62D"/>
            <Line x1="4" y1="4.5" x2="8" y2="4.5" stroke="#F6C62D"/>
            <Line x1="4" y1="6.5" x2="6" y2="6.5" stroke="#F6C62D"/>
            <Line x1="4" y1="6.5" x2="6" y2="6.5" stroke="#F6C62D"/>
        </Svg>
    </Component>
);

export default IconReceipt;
