import styled from 'styled-components/native';
import { H3 } from './text/Headings';
import { Body2 } from './text/Body';

const Component = styled.View `
    width: 260px;
    height: 38px;
    margin-left: 24px;
    margin-bottom: 15px;
`;

const Location_Address = ( props: { location : string, address: string } ) => (
    <Component>
        <H3> { props.location } </H3>
        <Body2> { props.address } </Body2>
    </Component>
);

export default Location_Address;