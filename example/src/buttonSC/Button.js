import styled, { css } from 'styled-components';


const Button = styled.button`
    font-size: 16px;
    margin-left: auto;
    border: 0;
    padding: 6px 12px;
    text-transform: uppercase;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    color: blue;

    ${props => props.red && css`
        background-color: red;
        color: white;
    `}
`;

export default Button;