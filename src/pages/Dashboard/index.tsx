import React from 'react';
import { Title, Form, Repositories } from './styles';
import Logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {

  return (
    <>
      <img src={Logo} alt="Github Explorer"/>
      <Title> Explore repositórios do Github </Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
            <a href="#">
              <img src="https://avatars0.githubusercontent.com/u/36564924?s=460&u=a599c6529d101dd8d936dce1efd4b12ba6ab9a79&v=4" alt="Alan Siqueira"/>
              <div>
                <h2>Nome do repositório</h2>
                <p>Descrição do repositório</p>
              </div>
              <FiChevronRight size={20} />
            </a>
            <a href="#">
              <img src="https://avatars0.githubusercontent.com/u/36564924?s=460&u=a599c6529d101dd8d936dce1efd4b12ba6ab9a79&v=4" alt="Alan Siqueira"/>
              <div>
                <h2>Nome do repositório</h2>
                <p>Descrição do repositório</p>
              </div>
              <FiChevronRight size={20} />
            </a>
            <a href="#">
              <img src="https://avatars0.githubusercontent.com/u/36564924?s=460&u=a599c6529d101dd8d936dce1efd4b12ba6ab9a79&v=4" alt="Alan Siqueira"/>
              <div>
                <h2>Nome do repositório</h2>
                <p>Descrição do repositório</p>
              </div>
              <FiChevronRight size={20} />
            </a>
            <a href="#">
              <img src="https://avatars0.githubusercontent.com/u/36564924?s=460&u=a599c6529d101dd8d936dce1efd4b12ba6ab9a79&v=4" alt="Alan Siqueira"/>
              <div>
                <h2>Nome do repositório</h2>
                <p>Descrição do repositório</p>
              </div>
              <FiChevronRight size={20} />
            </a>
        </Repositories>
    </>
  )
}

export default Dashboard;
