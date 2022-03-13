import React from 'react';
import * as S from './style';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
}
