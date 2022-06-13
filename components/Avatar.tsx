
import { 
    Image, 
    ImageSourcePropType, 
    View, 
    StyleSheet

 } from "react-native";


const Avatar = ( props: { img?: ImageSourcePropType, size: number} ) => (
    < View style={[ styles.view, { width: props.size, height: props.size} ]} >
        < Image style={ styles.img } source={ props.img! } />
    </ View >
);

const styles = StyleSheet.create({
    view: { 
        borderRadius: 9000, 
        backgroundColor: 'lightgray',
        overflow: 'hidden'
    },
    img: {
        height: "100%",
        width: "100%"
    }
});

export default Avatar;