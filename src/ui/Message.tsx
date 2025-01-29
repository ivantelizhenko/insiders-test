import { ReactNode } from 'react';
import styled from 'styled-components';

type MessageProps = {
  textSize?: string;
  children: ReactNode;
};

const StyledMessage = styled.p<{ $textSize: string }>`
  font-size: ${props => props.$textSize};
  line-height: 2rem;
  padding: 2rem 0 1rem;
`;

function Message({ children, textSize = '1.4rem' }: MessageProps) {
  return <StyledMessage $textSize={textSize}>{children}</StyledMessage>;
}

export default Message;
