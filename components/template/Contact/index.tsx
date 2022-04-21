import { ContactForm } from 'components';
import * as S from './style';

export function Contact() {
  return (
    <S.Container>
      <S.Title>Contact</S.Title>
      <ContactForm />
    </S.Container>
  );
}
