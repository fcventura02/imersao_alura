import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div style={{backgraundImage: ''}}>
    <Title>My page</Title>
    </div>
  )
}
