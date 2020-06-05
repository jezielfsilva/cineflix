import React from 'react';
import styled from 'styled-components';

const InputFrm = styled.input`
    width: ${props => props.width};
    height: 2rem;
    border-radius: 0.25em;
    border: 0;
    background: #F4F6F8;

    @media(max-width: 768px) {
        width: 18.4rem;
    }

    @media(max-width: 425px) {
        width: 21.01rem;
    }

    @media(max-width: 375px) {
        width: 18.5rem;
    }

    @media(max-width: 320px) {
        width: 15.82rem;
    }
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;

    p{
        color: #364859;
        font-size: 0.9em;
    }
`;

export default function Input(props) {
    return (
        <Label>
            <p>{props.labelText}</p>
            <InputFrm type={props.type} width={props.width}/>
        </Label>
    );
}