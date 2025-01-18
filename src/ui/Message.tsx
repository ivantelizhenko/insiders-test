import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type MessageProps = PropsWithChildren;

const StyledMessage = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 2rem 0 1rem;
`;

function Message({ children }: MessageProps) {
  return <StyledMessage>{children}</StyledMessage>;
}

export default Message;
