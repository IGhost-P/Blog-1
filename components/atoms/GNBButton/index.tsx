import Link from 'next/link';
import * as S from './style';
import { useTheme } from '../../../hooks/useTheme';

interface IGNBButtonProps {
  path: string;
  size: string;
  font: string;
  isTitle: boolean;
}

export function GNBButton({ path, size, font, isTitle }: IGNBButtonProps) {
  return (
    <Link href={path}>
      <S.Container className="nav" size={size} isTitle={isTitle}>
        {font}
      </S.Container>
    </Link>
  );
}
