import Foto from './foto-yuri-eu.jpg'
function Header() {
    return (
      <header>
        <div className="profile-info">
            <div className="FT">
            <img src={Foto} alt="minha foto de perfil" className="FT-perfil"/>
            </div>

          <h1 className="Nome">Yuri Massaru de Oliveira Matsubara</h1>
          <p className="Titulo">Formado em ciência da computação </p>
          
          <div>
          <a href="https://linkedin.com/in/yuri-massaru-b7b785211/" target="_blank" rel="noopener noreferrer" className="social-link-1">LinkedIn</a>
          <br></br>
          <a href="https://github.com/YuriM-O" target="_blank" rel="noopener noreferrer" className="social-link-2">GitHub</a>
          </div>
        </div>
        <nav>
          {/* Links de navegação (se você implementar) */}
        </nav>
      </header>
    );
  }
  
  export default Header;