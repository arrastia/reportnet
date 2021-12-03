import styled from 'styled-components';

const Badge = styled('span')`
  align-items: center;
  background-color: #3a6df0;
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 10px;
  height: 1.5rem;
  justify-content: center;
  position: absolute;
  right: -6px;
  top: -6px;
  width: 1.5rem;

  .notification + svg,
  .notification + div {
    margin-left: 22px;
  }
  @media screen and (max-width: 945px) {
    .notification + svg,
    .notification + div {
      display: none;
    }
  }

  &.updates {
    position: relative;
    top: 0;
    right: 0;
    margin-left: auto;
    width: 18px;
    height: 18px;
    font-size: 11px;
  }
`;

export const Styles = { Badge };
