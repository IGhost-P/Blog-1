import { Title, AdditionalInfo, Description } from 'components';
import * as S from './style';

interface IDataProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  min: string;
}

export function Post({ post }: { post: IDataProps }) {
  const { slug, title, description, date, min } = post;
  return (
    <S.Container>
      <Title slug={slug} title={title} />
      <AdditionalInfo text={date} />
      <AdditionalInfo text={min} />
      <Description description={description} />
    </S.Container>
  );
}
