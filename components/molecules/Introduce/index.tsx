import { IntorduceImg, IntroduceDes } from 'components';
import * as S from './style';

export function Introduce() {
  return (
    <S.Container>
      <IntorduceImg />
      <IntroduceDes />
    </S.Container>
  );
}
