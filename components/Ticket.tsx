import styled from 'styled-components/native';

const Component = styled.View `
    margin-top: 30px;
    left: -8px;
    flex-direction: row;
`;

const Line = styled.View `
    height: 0;
    width: 95%;
    border: 1px dashed #EBEEF1;
    margin-top: auto;
    margin-bottom: auto;
`;

const Ellipse = styled.View `
    background: #F2C840;
    width: 16px;
    height: 16px;
    border-radius: 100px;
`;

const Ticket = (props: any) => (
    <Component>

        <Ellipse style={{marginLeft: 0}} />
        <Line />
        <Ellipse style={{marginRight: "auto"}}/>

    </Component>
);

export default Ticket;
