import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import * as S from './style';
import { useTheme } from '../../../hooks/useTheme';

export function Toggle() {
  const { onToggle } = useTheme();

  return (
    <S.Container onClick={onToggle}>
      <div className="toggle-button-switch"></div>
      <div className="toggle-button-text">
        <div className="toggle-button-text-on">
          <FontAwesomeIcon icon={faSun} />
        </div>
        <div className="toggle-button-text-off">
          <FontAwesomeIcon icon={faMoon} />
        </div>
      </div>
    </S.Container>
  );
}
