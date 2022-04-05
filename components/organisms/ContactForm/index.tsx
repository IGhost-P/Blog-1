import * as S from './style';

export function ContactForm() {
  return (
    <S.Form>
      <S.Controls>
        <S.Control>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </S.Control>
        <S.Control>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </S.Control>
      </S.Controls>
      <S.Controls>
        <S.Control>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={10} required></textarea>
        </S.Control>
      </S.Controls>
    </S.Form>
  );
}
