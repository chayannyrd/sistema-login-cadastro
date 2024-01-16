import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Atoms/Input/index'
import Botao from '../../Atoms/Botao/index'
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <Container>
      <Form>
        <h1>Conecte-se</h1>
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
        <Link to={'/'}>
          <Botao
            text='Entrar!'
          />
          </Link>
        <SubContainerSign>
          <p><Link to={'/cadastrar'}>Não possui conta?</Link></p>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Login;