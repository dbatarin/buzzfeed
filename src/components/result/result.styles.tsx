import styled from "styled-components";

export const ResultWrapper = styled.div`
  background-color: #fefefe;
  border: 1px solid #ddd;
  padding: 16px;

  .title {
    font-size: 0.9rem;
    color: #797979;
  }

  .result {
    font-size: 1.4rem;
    font-weight: 600;
    display: block;
    margin-bottom: 16px;
  }

  .retake {
    width: 100%;
    background: none;
    padding: 8px 14px;
    color: #07e;
    border: 1px solid #07e;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
      background: #07e;
      color: #fff;
    }
  }
`;
