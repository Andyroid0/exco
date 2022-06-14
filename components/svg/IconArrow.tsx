import { Path, Svg } from 'react-native-svg';
import { StyleProp } from 'react-native';
import { View } from 'react-native';

const IconArrow = ( props: { style?: StyleProp<any> }) => (

    <View style={ props.style } >
        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" >
            <Path d="M6 0L4.94 1.06L9.13 5.25H0V6.75H9.13L4.94 10.94L6 12L12 6L6 0Z" fill="black"/>
        </Svg>
    </View>

);

export default IconArrow;