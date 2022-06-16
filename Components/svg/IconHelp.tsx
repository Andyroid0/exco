import { Path, Svg } from 'react-native-svg';
import { StyleProp } from 'react-native';
import styled from 'styled-components/native';

const Component = styled.View `
    width: 24px;
    height: 24px;
    border-radius: 100px;
    background: #000;
    justify-content: center;
    align-items: center;
`;
const IconHelp = ( props: { onPress?: () => void, style?: StyleProp<any> } ) => (
    <Component>
        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <Path d="M5.5 9H6.5V8H5.5V9ZM6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6 10C3.795 10 2 8.205 2 6C2 3.795 3.795 2 6 2C8.205 2 10 3.795 10 6C10 8.205 8.205 10 6 10ZM6 3C4.895 3 4 3.895 4 5H5C5 4.45 5.45 4 6 4C6.55 4 7 4.45 7 5C7 6 5.5 5.875 5.5 7.5H6.5C6.5 6.375 8 6.25 8 5C8 3.895 7.105 3 6 3Z" fill="#F6C62D"/>
        </Svg>
    </Component>
);

export default IconHelp;