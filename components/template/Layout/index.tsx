import { GNB } from 'components';
import { useEffect } from 'react';
import * as S from './style';
import { useTheme, useNavScroll } from 'hooks';

export function Layout({ children }: { children: React.ReactNode }) {
  const { initTheme } = useTheme();
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <S.Container>
      <GNB />
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
}
