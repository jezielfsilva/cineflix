import React from 'react';
import styled from 'styled-components';

const ButtonsPage = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 0.25em;
    border: 0;
    font-size: 1.1em;
    color: ${props => props.color};
    background: ${props => props.background};
`;

const Button = (props) => {
    return (
        <ButtonsPage
            background={props.background || 'transparent'}
            width={props.width}
            height={props.height}
            color={props.color || '#FFFFFF'}
        >
            {props.children}
        </ButtonsPage>
    );
}

export default Button;