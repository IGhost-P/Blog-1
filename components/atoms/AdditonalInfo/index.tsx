import * as S from './style';

export function AdditionalInfo({ text }: { text: string }) {
  return <S.Info className="info">{text}</S.Info>;
}
