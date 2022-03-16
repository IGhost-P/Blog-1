import * as S from './style';

export function Description({ description }: { description: string }) {
  return <S.Descript className="description">{description}</S.Descript>;
}
