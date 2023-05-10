import Menu from '../components/Menu/Menu';
import { Botao, DivPrincipal, Input } from './style_entra';
import { Titulo, Fundo } from './style';

function Entra() {
  return (
    <div className="Entra">
      <Fundo>
        <Menu />
        <header className="App-header">
          <DivPrincipal>
            <label for="email">Digite seu E-mail</label>
            <p><Input type="e-mail" placeholder=' email' name="email" /></p>
            <label for="senha">Digite sua Senha</label>
            <p><Input type="password" placeholder=' senha' name="senha" /></p>
            <Botao type='button'>Logar</Botao>
          </DivPrincipal>
        </header>
      </Fundo>

    </div>
  );
}

export default Entra;
