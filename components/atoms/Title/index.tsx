import Link from 'next/link';
import * as S from './style';

export function Title({ slug, title }: { slug: string; title: string }) {
  const linkPath = `/${slug}`;
  return (
    <Link href={linkPath}>
      <S.Title className="title">{title}</S.Title>
    </Link>
  );
}
