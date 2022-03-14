import Link from 'next/link';
import * as S from './style';
import { useTheme } from '../../../hooks/useTheme';

interface IGNBButtonProps {
  path: string;
  size: string;
  font: string;
}

export function GNBButton({ path, size, font }: IGNBButtonProps) {
  return (
    <Link href={path}>
      <S.Container className="nav" size={size}>
        {font}
      </S.Container>
    </Link>
  );
}
