import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1<{ size: number }>`
    color: darkolivegreen;
    font-size: ${({ size }) => size}px;
`;

class App extends React.Component {
    public render() {
        return <Title size={24}>Hello World!</Title>;
    }
}

export default hot(App);
