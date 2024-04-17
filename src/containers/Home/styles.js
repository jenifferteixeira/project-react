import styled from 'styled-components';
import Background from '../../assets/bg image.svg';

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 40px;

`;

export const Image = styled.img`
    margin-top: 30px;
`;


export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #eeeeee;
    margin-left: 25px;

`;

export const Input = styled.input`
    border-radius: 14px;
    height: 58px;
    width: 342px;
    margin-bottom: 35px;
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;

    padding-left: 25px;
    font-style: normal;
    color: rgba(255, 255, 255, 1);
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
`;


