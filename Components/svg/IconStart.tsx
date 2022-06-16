import { Pressable, StyleProp } from 'react-native';
import { Circle, Path, Svg,  } from 'react-native-svg';


const IconStart = ( props: { onPress?: () => void, style?: StyleProp<any> } ) => (

    <Pressable onPress={ props.onPress } style={ props.style } >

        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" >
            <Circle cx="6" cy="6" r="6" fill="#F6C62D"/>
            <Path d="M3 6L3.53 5.47L5.625 7.565L5.625 3L6.375 3L6.375 7.565L8.47 5.47L9 6L6 9L3 6Z" fill="black"/>
        </Svg>

    </Pressable>
);

export default IconStart;