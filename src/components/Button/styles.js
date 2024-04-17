import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${props => props.isBack ? '1px solid #fff' : 'none'};
    cursor: pointer;
    margin-top: 130px;

    background-color: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
    border-radius: 14px;
    height: 74px;
    width: 342px;

    font-weight: bold;
    font-style: normal;
    font-size: 17px;
    line-height: 28px;
    color:rgba(255, 255, 255, 1);

    &:hover {
        opacity: 0.7;
    };

    &:active {
        opacity: 0.4;
    }

`;