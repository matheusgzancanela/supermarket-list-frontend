import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Title, Subtitle } from 'components/atoms'
import { Input } from 'components/molecules'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ScreenContainer,
  ContentContainer,
  BagImage,
  ButtonContainer
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  console.log(username)

  const onClickContinue = () => {
    if (username.length < 3) {
      alert('Username deve contar mais do que 3 caracteres!')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />

        <Title>Sua lista de supermercado mais fácil do que nunca</Title>

        <Subtitle>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </Subtitle>

        <Subtitle mw={452} align="left" mb={16}>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </Subtitle>

        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Digite aqui seu usuário."
        />

        <ButtonContainer>
          <Button onClick={onClickContinue}>Continuar</Button>
        </ButtonContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}
