import React from 'react'
import styled from 'styled-components'

const Header = props => (
    <Title>
        React-Router-Test
    </Title>
)

const Title = styled.h1`
    /* font-size: 32px; */
    font-weight: normal;
    background-color: pink;
    margin: 0;
    padding: 16px;
`

export default Header