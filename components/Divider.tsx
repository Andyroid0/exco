import styled from 'styled-components/native';
import { StyleProp, View } from 'react-native';

const ComponentH = styled.View `
    height: 0;
    width: 100%;
    border: 1px solid #EBEEF1;
`;

const ComponentH_dashed = styled.View `
    height: 0;
    width: 100%;
    border: 1px dashed #EBEEF1;
`;

const ComponentV = styled.View `
    height: 100%;
    width: 0;
    border: 1px solid #EBEEF1;
`;


const Divider = ( 
    props: { 
        orientation: "vertical" | "horizontal", 
        indent?: boolean,
        style: StyleProp<any>,
        variant?: "dashed" | "solid"

    } ) => (
       <View style={[ props.indent && { marginLeft: "6.5%" }, props.style ]} >
            {
                props.orientation === 'vertical' ?
                
                    <ComponentV/>
                :

                props.orientation === 'horizontal' ?

                    <>
                        {
                            props.variant === "dashed" ?

                                <ComponentH_dashed/>
                            :

                            props.variant === "solid" ?

                                <ComponentH/>
                            :

                                <ComponentH/>
                        }
                    </>

                :
                    <ComponentH/>
            }
       </View>
);

export default Divider;