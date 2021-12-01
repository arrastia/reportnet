import styled from 'styled-components';

import { Button as ButtonStyles } from 'ui/_styles/components/Button';

const Button = styled(ButtonStyles)`
  > span {
    padding: 0.35rem;
  }

  &.primary {
    background-color: var(--primary-color);
    color: var(--white);
  }

  &.secondary {
    background-color: var(--secondary-color);
    color: var(--text);
  }

  &.delete {
    background-color: var(--error);
    color: var(--white);
  }

  &.transparent {
    background-color: var(--transparent);
    color: var(--text);

    // > span {
    //   padding: 0.1rem;
    // }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Icon = styled('span')<{ iconSize?: number }>`
  align-items: center;
  display: flex;
  font-size: x-large;

  svg,
  img {
    height: ${({ iconSize }) => `${iconSize}rem` || '2rem'};
    width: ${({ iconSize }) => `${iconSize}rem` || '2rem'};
  }
`;

const Text = styled('span')`
  font-size: large;
  line-height: normal;
  /* text-transform: capitalize; */
`;

export const Styles = { Button, Icon, Text };
