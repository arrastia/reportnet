import styled from 'styled-components';

export const Button = styled('button')`
  align-items: center;
  border-radius: 10px;
  border: var(--primary-color);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: space-around;
  margin: 0;
  opacity: 0.85;
  overflow: visible;
  padding: 0.25rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s ease-out;
  user-select: none;
  -moz-border-radius: 10px;
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -moz-user-select: none;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-border-radius: 10px;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-user-select: none;

  &:active {
    transform: scale(0.97);
    transition: transform 0.1s ease-in;
  }

  &:hover {
    opacity: 1;
  }
`;
