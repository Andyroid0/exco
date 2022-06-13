import { Path, Svg } from 'react-native-svg';
import styled from 'styled-components/native';


const Component = styled.Pressable `
    margin-left: 26px;
    margin-top: auto;
    margin-bottom: auto;
`;

const IconMore = (props: { onPress: () => void, }) => (
    <Component onPress={ props.onPress }>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 5.25C14.25 6.49264 13.2426 7.5 12 7.5C10.7574 7.5 9.75 6.49264 9.75 5.25C9.75 4.00736 10.7574 3 12 3C13.2426 3 14.25 4.00736 14.25 5.25ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12ZM12 21C13.2426 21 14.25 19.9926 14.25 18.75C14.25 17.5074 13.2426 16.5 12 16.5C10.7574 16.5 9.75 17.5074 9.75 18.75C9.75 19.9926 10.7574 21 12 21Z" fill="black"/>
        </Svg>
    </Component>
);

export default IconMore;