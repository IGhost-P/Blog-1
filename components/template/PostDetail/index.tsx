import { PostHeader, PostContent } from 'components';
import { IPostProps } from 'types';
import * as S from './style';

export function PostDetail({ post }: { post: IPostProps }) {
  const { slug, image, title, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <S.Container>
      <PostHeader title={title} src={imagePath} />
      <PostContent post={post} />
    </S.Container>
  );
}
