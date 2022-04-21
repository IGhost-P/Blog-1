import { useEffect } from 'react';
import { GNB } from 'components';
import { useTheme } from 'hooks';
import * as S from './style';

export function Layout({ children }: { children: React.ReactNode }) {
  const { initTheme } = useTheme();
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <S.Container>
      <GNB />
      <S.Wrapper>{children}</S.Wrapper>
      <S.Footer>
        <div>
          Design Inspired by{' '}
          <a href="https://overreacted.io/" target="_blank">
            overreacted.io
          </a>
        </div>
        <div>© 2022 Sang Kwon Yeum</div>
      </S.Footer>
    </S.Container>
  );
}
