import Avatar from './Avatar';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import IconMessages from '../../Components/svg/IconMessages';
import { Name_label, Role_label } from './text/Body';

const Component = styled.View `
    background: #F4F6F8;
    width: 100%;
    height: 71px;
    flex-direction: row;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
`;

const Container = styled.View `
    flex: 1;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 24px;  
    flex-direction: row; 
`;

const Column = styled.View `
    flex-direction: column;
    margin-left: 12px;
`;

const Footer = ( props: { avatar: JSX.Element, firstName: string, lastName: string, title: string} ) => (
    <Component>
        <Container>
            { props.avatar }
            <Column>
                <Name_label> { props.firstName } { props.lastName.charAt(0) }.</Name_label>
                <Role_label> { props.title } </Role_label>
            </Column>
        </Container>
        <IconMessages style={styles.messages} onPress={ () => console.log("Messages...")} />
    </Component>
);

const styles = StyleSheet.create({
    messages: {
        marginRight: 24,
        marginTop: "auto",
        marginBottom: "auto"
    }
});

export default Footer;
