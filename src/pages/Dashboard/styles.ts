import styled from 'styled-components';
import { shade,  } from 'polished';

const buttonColor = '#04D361';

//Template literals
export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    margin-top: 80px;
    max-width: 450px;
    line-height: 56px;
`;

export const Form = styled.form`
  max-width: 715px;
  margin-top: 40px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;

    &::placeholder {
      color: #a8a8b3;
    }

    &:active {
      border: #888;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    background: ${buttonColor};
    border-radius: 0 5px 5px 0;

    color: #FFF;
    font-weight: bold;

    transition: background-color 0.1s ;

    &:hover {
      background: ${shade(0.2, buttonColor)};
    }
  }
`;


export const Repositories = styled.div`

  margin-top: 80px;
  width: 100%;
  max-width: 715px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.1s;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      h2 {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
      }
    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
      }
  }

`;
