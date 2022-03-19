import * as S from './style';

export function AdditionalInfo({ isDetail, text }: { isDetail: boolean; text: string }) {
  return <S.Info className={isDetail ? 'info detail' : 'info'}>{text}</S.Info>;
}
