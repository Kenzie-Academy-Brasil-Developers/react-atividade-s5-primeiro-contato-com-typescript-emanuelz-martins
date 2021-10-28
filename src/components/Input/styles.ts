import styled from 'styled-components';

export const Label = styled.label`
    ::after {
        content: ': ';
    }
`;

export const InputField = styled.input`
    -moz-appearance: textfield;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    margin: 1em 0;
`;
