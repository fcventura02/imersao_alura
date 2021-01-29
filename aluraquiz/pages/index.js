import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import { Widget } from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infoEvent) => {
              infoEvent.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="inputName"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>The legend of zelda</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tempora praesentium minima cumque sequi,
              veritatis perspiciatis excepturi, reprehenderit
              iure nesciunt expedita aliquam commodi laborum
              exercitationem omnis voluptas fugit soluta
              perferendis voluptate.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/fcventura02/imersao_alura" />
    </QuizBackground>
  );
}
