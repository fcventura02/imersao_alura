import styled from 'styled-components'
import db from '../db.json'
import { Widget } from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import GitHubCorner from '../src/components/GitHubCorner'


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt numquam impedit veritatis asperiores, beatae iure libero, eligendi inventore corrupti autem minima molestias eum optio rem repellat consequuntur ut? Dolorum, neque?</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>The legend of zelda</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora praesentium minima cumque sequi, veritatis perspiciatis excepturi, reprehenderit iure nesciunt expedita aliquam commodi laborum exercitationem omnis voluptas fugit soluta perferendis voluptate.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/fcventura02/imersao_alura"/>
    </QuizBackground>
  )
}
