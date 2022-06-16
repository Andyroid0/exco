import { Path, Svg } from 'react-native-svg';
import { Pressable, StyleProp } from 'react-native';


const IconMessages = ( props: { onPress: () => void, style?: StyleProp<any> } ) => (

    <Pressable onPress={ props.onPress } style={ props.style } >
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9V15C0 16.545 0.389327 17.9992 1.07523 19.2696L0.0576082 22.9585C-0.107558 23.5572 0.442818 24.1076 1.04155 23.9424L4.73042 22.9248C6.00085 23.6107 7.45496 24 9 24H15C19.9706 24 24 19.9706 24 15V9C24 4.02944 19.9706 0 15 0H9Z" fill="black"/>
        </Svg>
    </Pressable>
);

export default IconMessages;
