import { PostHeader, PostContent } from 'components';
import * as S from './style';

const DUMMY_POST = {
  slug: 'about-react',
  title: 'About React',
  image: 'Next.png',
  date: '2022-02-11',
  min: '☕️☕️☕️ 20 min',
  content: '# This is a first post',
};

export function PostDetail() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <S.Container>
      <PostHeader title={DUMMY_POST.title} src={imagePath} />
      <PostContent content={DUMMY_POST.content} />
    </S.Container>
  );
}
