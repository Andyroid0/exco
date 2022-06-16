import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import IconArrow from '../../Components/svg/IconArrow';
import { Body } from './text/Body';


const Component = styled.Pressable `
    width: 320px;
    height: 58px;
    flex-direction: row;
    margin-left: 24px;
`;

const Container = styled.View `
    flex: 1;
    margin-top: auto;
    margin-bottom: auto;    
`;

const Icon = styled.View `
    margin-right: 12px;
    margin-top: auto;
    margin-bottom: auto;
`;

const Section = ( props: { icon: JSX.Element, label: string } ) => (
    <Component style={ styles.component } >
        <Icon>{ props.icon }</Icon>
        <Container>
            <Body>{ props.label }</Body>
        </Container>
        <IconArrow style={styles.arrow} />
    </Component>
);

const styles = StyleSheet.create({
    component: {
        borderBottomColor: "#EBEEF1",
        borderBottomWidth: 1,
    },
    arrow: {
        marginRight: 24,
        marginTop: "auto",
        marginBottom: "auto"
    }
});

export default Section;