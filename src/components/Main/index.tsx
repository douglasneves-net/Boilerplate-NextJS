import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="img/logo.svg" alt="Logo do site" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ullustration src="img/hero-illustration.svg" alt="hero" />
  </S.Wrapper>
)

export default Main
