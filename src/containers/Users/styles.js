import styled from 'styled-components';
import Background from '../../assets/bg image2.svg';

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    gap: 40px;
`;

export const Image = styled.img`
    height: 120px;
    margin: 30px 0 60px 0;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: 14px;
    height: 58px;
    width: 342px;
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    margin-top: 20px;

    p{
        padding-left: 25px;
        font-style: normal;
        color: rgba(255, 255, 255, 1);
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
        font-size: 40px;
    }
`
