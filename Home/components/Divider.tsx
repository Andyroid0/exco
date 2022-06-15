import styled from 'styled-components/native';
import { StyleProp, View } from 'react-native';


const Component = styled.View `
    height: 0px;
    width: 100%;
    border: 1px solid #EBEEF1;
`;

const ComponentV = styled.View `
    height: 1px;
    width: 1px;
    border: 1px solid #EBEEF1;
`;

const Divider = ( 
    props: { 
        orientation: "vertical" | "horizontal", 
        indent?: boolean,
        style?: StyleProp<any>,
        variant?: "dashed" | "solid",
        scale?: number

    } ) => (
       <View style={[ props.indent && { marginLeft: "6.5%" }, props.style ]} >
            {
                props.orientation === 'vertical' ?
                
                    <ComponentV style={{ transform: [{ scaleY: props.scale as number }] }}/>
                :
                    <Component/>
            }
       </View>
);

export default Divider;