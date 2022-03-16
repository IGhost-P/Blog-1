import ReactMarkdown from 'react-markdown';
import * as S from './style';

export function PostContent({ content }: { content: string }) {
  return (
    <S.Container>
      <ReactMarkdown children={content} />
    </S.Container>
  );
}
