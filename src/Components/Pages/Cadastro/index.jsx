import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Atoms/Input/index'
import Botao from '../../Atoms/Botao/index'
import { Link } from 'react-router-dom'

const Cadastro = () => {

  return (
    <Container>
      <Form>
        <h1>Cadastre-se agora</h1>
        <Input
          name='nome'
          placeholder='Digite o seu nome'
          type='text'
        />
        <Input
          name='telefone'
          placeholder='Digite o seu telefone'
          type='number'
        />
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          type='password'
        />
        <Input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          type='password'
        />
        <Link to={'/login'}>
          <Botao
            text='Efetuar Cadastro!'
          />
        </Link>
        <SubContainerSign>
          <p><Link to={'/login'}>Já possui conta?</Link></p>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Cadastro;