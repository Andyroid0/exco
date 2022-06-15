import { Path, Svg } from 'react-native-svg';
import { Pressable, StyleProp } from 'react-native';


const IconClose = ( props: { onPress?: () => void, style?: StyleProp<any> } ) => (
    
    <Pressable onPress={ props.onPress } style={ props.style } >

        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
            <Path d="M22 2L2 22" stroke="black" strokeWidth={3}/>
            <Path d="M2 2L22 22" stroke="black" strokeWidth={3}/>
        </Svg>

    </Pressable>
);

export default IconClose;
