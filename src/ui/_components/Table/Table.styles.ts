import styled from 'styled-components';

const TableWrapper = styled('section')`
  color: var(--text);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 13px;
  font-weight: 400;
  height: 100%;
  position: relative;
  width: auto;
`;

const TableW = styled('div')`
  display: block;
  flex-grow: 1;
  max-width: 100%;
  overflow-x: auto;
`;

const Table = styled('table')`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  overflow: hidden;
`;

const TableHead = styled('thead')``;

const TableBody = styled('tbody')``;

export const Styles = { Table, TableBody, TableHead, TableW, TableWrapper };
