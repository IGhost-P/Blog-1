import { useState } from 'react';
import * as S from './style';

interface IInputs {
  name: string;
  email: string;
  message: string;
}

const _fetch = async ({ newContact }: { newContact: IInputs }) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong, please try again later');
  }
};

export function ContactForm() {
  const [inputs, setInputs] = useState<IInputs>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string>('Submit');

  const { name, email, message } = inputs;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const resetState = () => new Promise((resolve) => setTimeout(resolve, 2000));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('Sending');

    try {
      await _fetch({ newContact: inputs });
      setInputs({ name: '', email: '', message: '' });
      setStatus('Success');
    } catch (err: unknown) {
      console.error(err);
      setStatus('Error');
    } finally {
      await resetState();
      setStatus('Submit');
    }
  }

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Controls>
        <S.Control>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" value={email} onChange={onChange} required />
        </S.Control>
        <S.Control>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" id="name" value={name} onChange={onChange} required />
        </S.Control>
      </S.Controls>
      <S.Controls>
        <S.Control>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows={10}
            value={message}
            onChange={onChange}
            required
          ></textarea>
        </S.Control>
      </S.Controls>
      <S.Button className={status}>{status}</S.Button>
    </S.Form>
  );
}
