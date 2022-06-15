import styled from 'styled-components/native';
import { Body2 } from './text/Body';

const Component = styled.View `
    width: 311px;
    margin-left: 6.5%;
    margin-bottom: 3%;
`;

const SubHeading = (props: any) => (
    <Component> 
        <Body2> { props.text } </Body2>
    </Component>
);

export default SubHeading;