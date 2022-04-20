import Image from 'next/image';
import * as S from './style';

export function IntorduceImg() {
  return (
    <S.Container>
      <Image src={'/images/personal/yummy-sk.jpg'} width={50} height={50} />
    </S.Container>
  );
}
