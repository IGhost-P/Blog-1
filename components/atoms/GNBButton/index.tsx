import Link from 'next/link';
import * as S from './style';

interface IGNBButtonProps {
  path: string;
  size: string;
  font: string;
}

export function GNBButton({ path, size, font }: IGNBButtonProps) {
  return (
    <Link href={path}>
      <S.Container isDark={false} size={size}>
        {font}
      </S.Container>
    </Link>
  );
}
