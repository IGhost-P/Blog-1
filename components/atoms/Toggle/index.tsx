import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import * as S from './style';

export function Toggle() {
  return (
    <S.Container>
      <S.Switch />
      <S.Text>
        <S.On>
          <FontAwesomeIcon icon={faSun} />
        </S.On>
        <S.Off>
          <FontAwesomeIcon icon={faMoon} />
        </S.Off>
      </S.Text>
    </S.Container>
  );
}
