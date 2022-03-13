import Image from 'next/image';
import * as S from './ style';

export function GitHub() {
  return (
    <S.Container target="_blank" href="https://github.com/Yummy-sk" rel="noreferrer">
      <Image src="/images/github/github.svg" alt="github link" width={20} height={20} />
    </S.Container>
  );
}
