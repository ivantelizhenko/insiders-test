import styled from 'styled-components';
import Heading from '../headings/Heading';
import { ReactNode } from 'react';

const StyledTable = styled.div`
  border: 1px solid #e3e8ee;
  max-height: 100vh;

  overflow-y: scroll;
`;

const StyledHeadingsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 20rem auto 20rem 10rem 2.4rem;
  padding: 2.8rem 3.6rem;

  border-bottom: solid 1px #e3e8ee;
`;

function Table({ children }: { children: ReactNode }) {
  return <StyledTable>{children}</StyledTable>;
}

function HeadingsContainer({ children }: { children: ReactNode }) {
  return <StyledHeadingsContainer>{children}</StyledHeadingsContainer>;
}

function TableHeading({ children, as }: { children: ReactNode; as: string }) {
  return <Heading as={as}>{(children as string)?.trim()}</Heading>;
}

function TableList({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

Table.HeadingsContainer = HeadingsContainer;
Table.TableHeading = TableHeading;
Table.TableList = TableList;
export default Table;
