import React from 'react';
import styled from 'styled-components';

const ButtonsPage = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 0.1em;
    border: 0;
    font-size: 2em;
    letter-spacing: -0.015em;
    line-height: 1.5em;
    color: ${props => props.color};
    background: ${props => props.background};

    &:hover {
        background: #C74350;
        color: #FFFFFF;
    }
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