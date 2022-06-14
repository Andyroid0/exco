import styled from 'styled-components/native';

const Body = styled.Text `
    font-family: Rubik;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
`;

const Body2 = styled.Text `
    color: rgba( 0, 0, 0, .6)
    font-family: Rubik;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
`;

const Caption = styled.Text `
    color: rgba( 0, 0, 0, .3);
    font-family: Rubik;
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
`;

const Subtitle = styled.Text `
    color: rgba( 0, 0, 0, .5);
    font-family: Rubik;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: .5px;
    line-height: 11px;
`;

const Date_time = styled.Text `
    font-family: Rubik;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
`;

const Date_label = styled.Text `
    color: rgba( 0, 0, 0, .5);
    font-family: Rubik;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: .5px;
    line-height: 11px;
    text-transform: uppercase;
`;

export {
    Body,
    Body2,
    Caption,
    Date_time,
    Date_label,
    Subtitle,
}