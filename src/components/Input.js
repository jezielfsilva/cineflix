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