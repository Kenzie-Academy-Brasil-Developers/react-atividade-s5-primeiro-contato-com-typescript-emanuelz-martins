import styled from 'styled-components';

export const Paper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    background-color: rgb(210, 245, 210);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 10px;

    margin-bottom: 2em;
    padding: 15px;
    max-width: 15rem;
    width: 13rem;
    height: 8rem;

    :hover {
        transform: scale(1.1, 1.1);
        transition: all 0.3s;
    }
`;

export const Title = styled.h2`
    text-transform: capitalize;
    margin: 0.5em;
`;

export const Hobby = styled.p`
    margin: 0.5em;
`;
