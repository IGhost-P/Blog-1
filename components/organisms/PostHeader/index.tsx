import { AdditionalInfo } from 'components/atoms/AdditonalInfo';
import Image from 'next/image';
import { IPostProps } from 'types';
import * as S from './style';

export function PostHeader({ post }: { post: IPostProps }) {
  const { title, image, slug, date, min } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <S.Container>
      <div className="img-detail">
        <Image src={imagePath} width={300} height={200} />
      </div>
      <h1>{title}</h1>
      <div className="detail-wrapper">
        <AdditionalInfo isDetail={true} text={date} />
        <AdditionalInfo isDetail={true} text={min} />
      </div>
    </S.Container>
  );
}
