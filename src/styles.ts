import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    margin: 3em 0;
`;

export const Button = styled.button`
    display: flex;
    flex-grow: 0;
    flex-basis: 0;
    flex-shrink: 0;

    letter-spacing: 2px;
    font-size: 0.8rem;
    color: grey;

    border: 1px solid grey;
    background-color: transparent;

    padding: 0.5em 1.5em;

    :hover {
        cursor: pointer;
        border: 1px solid black;
        color: black;
    }
`;

export const CardsSection = styled.section`
    width: 100%;
    min-height: 100%;
`;

export const SectionTitle = styled.h2`
    margin-left: 5rem;
`;

export const CardList = styled.ol`
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;
