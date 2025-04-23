import Foto from './foto-yuri-eu.jpg'
function Presentation() {
    return (
      <section id="presentation" className="presentation">
        <div>
          <img src={Foto} alt="minha Foto de Perfil"
          style={{ width: '150px', height: 'auto', borderRadius: '50%', objectFit: 'cover' , position: 'center'}}/>
        </div>
        <div className="intro">
          <h1>Olá, me chamo Yuri Massaru de Oliveira Matsubara</h1>
          <p className="Titulo">Formado em ciência da computação e desenvolvedor iniciante</p>
          <p className="Descrição">Nasci em 28/04/2003, meu estado civil é solteiro, por mais que já esteja
            envolvido na área de tecnologia, estou buscando mais oportunidades na parte de
            desenvolvimento pois é com o que eu mais gostaria de trabalhar, possuo bastante conhecimento prático 
            em Hardware e manuntenção de computadores, notebooks e outros aparelhos, mas apenas conhecimento teórico
            na parte de programação, na parte prática de programar possuo experiencia apenas com pequenos projetos pra teste, faculdade e alguns pequenos
            ajustes e participações em trabalhos anteriores ajudando a equipe de desenvolvimento e algumas situações que precisaram de reparo rápido.
          </p>
          <div>
          <a href="https://linkedin.com/in/yuri-massaru-b7b785211/" target="_blank" rel="noopener noreferrer" className="social-link-1">LinkedIn</a>
          <br></br>
          <a href="https://github.com/YuriM-O" target="_blank" rel="noopener noreferrer" className="social-link-2">GitHub</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Presentation;