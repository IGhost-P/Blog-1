import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { IPostProps } from 'types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import * as S from './style';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('css', css);

export function PostContent({ post }: { post: IPostProps }) {
  return (
    <S.Container>
      <ReactMarkdown
        children={post.content}
        components={{
          img: (image: any) => {
            return (
              <div className="img-detail">
                <Image
                  key={image.alt}
                  className="detail"
                  src={`/images/posts/${post.slug}/${image.src}`}
                  alt={image.alt}
                  width={600}
                  height={300}
                />
              </div>
            );
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dracula}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          p: ({ node, ...props }) => <p className="detail" {...props} />,
          small: ({ node, ...props }) => <small className="detail" {...props} />,
          ul: ({ node, ...props }) => <ul className="detail" {...props} />,
          h2: ({ node, ...props }) => <h2 className="detail" {...props} />,
          h3: ({ node, ...props }) => <h3 className="detail" {...props} />,
        }}
      />
    </S.Container>
  );
}
