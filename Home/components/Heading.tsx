import styled from 'styled-components/native';
import { H1 } from './text/Headings';

const Component = styled.View `
    width: 311px;
    margin-left: 6.5%;
    margin-bottom: 1%;
    margin-top: 4%;
`;

const Heading = (props: any) => (
    <Component>
        <H1> { props.text } </H1>
    </Component>
);

export default Heading;