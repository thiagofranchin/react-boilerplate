import * as S from './styles'

type MainProps = {
  title?: string
}

const Main = ({ title = `React Boilerplate test` }: MainProps) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
)

export default Main
