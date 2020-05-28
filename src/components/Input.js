import React from 'react';
import styled from 'styled-components';

const InputFrm = styled.input`
    width: 20rem;
    height: 3rem;
    border-radius: 0.25em;
    background: #F4F6F8;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;

    p{
        color: #364859;
        margin-left: 0.5rem;
        font-size: 0.8125em;
    }
`;

export default function Input(props) {
    return (
        <Label>
            <p>{props.labelText}</p>
            <InputFrm type={props.type}/>
        </Label>
    );
}