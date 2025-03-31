'use client';

import styled from 'styled-components';

import GlobalStyle from '@/styles/GlobalStyle';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="root">
      <GlobalStyle />
      <StyledContent>
        <div id="content">{children}</div>
      </StyledContent>
    </div>
  );
}
