import { Pressable, StyleProp } from 'react-native';
import { 
    Circle,
    ClipPath,
    Defs,
    G,
    Path, 
    Rect,
    Svg 

} from 'react-native-svg';

const IconEnd = ( props: { onPress?: () => void, style?: StyleProp<any> } ) => (

    <Pressable onPress={ props.onPress } style={ props.style } >

        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" >
            <G clip-path="url(#clip0)">
                <Circle cx="6" cy="6" r="6" transform="rotate(-180 6 6)" fill="black"/>
                <Path d="M9 6L8.47 6.53L6.375 4.435L6.375 9L5.625 9L5.625 4.435L3.53 6.53L3 6L6 3L9 6Z" fill="#F6C62D"/>
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)"/>
                </ClipPath>
            </Defs>
        </Svg>

    </Pressable>

);

export default IconEnd;