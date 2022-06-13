import styled from 'styled-components/native';

const H1 = styled.Text `
    font-family: Rubik;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    text-transform: uppercase;
    text-align: left;
`;

const H2 = styled.Text `
    font-family: Rubik;
    font-size: 19px;
    font-weight: 900;
    line-height: 23px;
`;

const H3 = styled.Text `
    font-family: Rubik;
    font-size: 19px;
    font-weight: 500;
    line-height: 23px;
`;

const H4 = styled.Text `
    color: rgba( 0, 0, 0, .6 );
    font-family: Rubik;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
`;

const Spot = styled.Text `
    font-family: Rubik;
    font-size: 11px;
    font-weight: 700;    
    line-height: 13px;
    letter-spacing: .25px;
    text-transform: uppercase;
`;


export {
    H1,
    H2,
    H3,
    H4,
    Spot
}