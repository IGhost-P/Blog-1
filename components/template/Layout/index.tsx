import { GNB } from 'components';
import React from 'react';
import * as S from './style';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Container>
      <GNB />
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
}
