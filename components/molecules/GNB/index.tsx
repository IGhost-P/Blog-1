import { GNBButton, Toggle } from 'components';
import * as S from './style';
import { useEffect, useRef } from 'react';
import { useNavScroll } from 'hooks';

const gnbs = [
  {
    path: '/',
    font: 'Home',
  },
  {
    path: '/contact',
    font: 'Contact',
  },
];

export function GNB() {
  const navRef = useRef<HTMLInputElement>(null);
  const { onScroll } = useNavScroll({ ref: navRef });

  useEffect(() => {
    onScroll();
  }, []);

  return (
    <S.Container ref={navRef}>
      <GNBButton path="/" size="25" font="Yeummy-sk" isTitle={true} />
      <S.Wrapper>
        {gnbs.map((gnb) => (
          <GNBButton key={gnb.font} path={gnb.path} size="20" font={gnb.font} isTitle={false} />
        ))}
        <Toggle />
      </S.Wrapper>
    </S.Container>
  );
}
