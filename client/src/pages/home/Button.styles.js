import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 1rem; /* mt-4 */
  display: flex;
  justify-content: flex-start;
`;

export const MainBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin: 30px auto 0;
  padding: 10px 15px;
  background-color: #000;
  color: #e7e7e7;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
    color: #fff;
  }

  svg {
    margin-left: 8px;
    font-size: 18px;
  }`;

