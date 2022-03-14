import { GNBButton, GitHub, Toggle } from 'components';
import * as S from './style';

const gnbs = [
  {
    path: '/',
    font: 'Home',
  },
  {
    path: '/blog',
    font: 'Blog',
  },
];

export function GNB() {
  return (
    <S.Container>
      <GNBButton path="/" size="25" font="Yeummy-sk" />
      <S.Wrapper>
        <GitHub />
        {gnbs.map((gnb) => (
          <GNBButton key={gnb.font} path={gnb.path} size="20" font={gnb.font} />
        ))}
        <Toggle />
      </S.Wrapper>
    </S.Container>
  );
}
