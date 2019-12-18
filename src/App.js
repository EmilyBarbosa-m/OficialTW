import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'



class App extends Component {
  render() {

    return (
      <div className="App">

        <Header/>   
        {/* <header id="topo-home">
          <nav className="menu-home">
            <a href="#" />
            <img className="imagem_logo_home" src={require("./assets/img/logo.png")} alt="logo do site square events" />
            <h1 id="hlogo">SquareEvents Home</h1>


            <ul id="ul-home">
              <li id="li-home"><a className="home-as" href="#">Home</a></li>
              <li id="li-home"><a className="home-as" href="#">Login</a></li>
              <li id="li-home"><a className="home-as" href="#">Crie Seu Evento</a></li>
            </ul>
          </nav>
        </header> */}


        <main>
          <section id="home_banner" />
        </main>

        <div className="container-1-home">
          <div id="fotosobre-home">
            <img className="imagem_sobrehome" src={require("./assets/img/undraw_getting_coffee_wntr.png")} alt="duas garotas conversando e uma delas é cadeirante" width="600px" />
          </div>

          <div id="sobrenos-home">
            <h1 id="hsobre-home"> Você pode e deve realizar o seu evento na ThoughtWorks: </h1>

            <p id="psobre-home"> Nós somos uma empresa que apoia o acesso a todos,nada faz mais sentido para nós do que incentivar a diversidade.
            Por isso fazemos questão de ceder o nosso espaço de forma gratuita para qualquer comunidade que precise de um espaço para
             realizar as suas atividades,seja para palestras,meetups ou até mesmo reuniões! 
             <br/>
             O nosso espaço é seu! 
             <br/>
             Entre em contato e preencha a sua proposta de evento na sessão crie seu evento.
             <br/>
             Vem pra ThoughtWorks!
              </p>
          </div>
        </div>

        <section id="categorias_home">
          <div className="categorias_home_boxs">

            <div>
              <div className="img-icones-home">
                <img src={require('./assets/img/mic.png')} alt="microfone" />
              </div>


              <h2 id="hicones">Arte e Cultura</h2>
              <p id="picones"> Tem alguma proposta cultural para nós? Fale com a gente!</p>
            </div>
            
            <div className-="ho">
              <div className="img-icones-home">
                <img src={require('./assets/img/pacman.png')} alt="microfone" />
              </div>


              <h2 id="hicones">Tecnologia</h2>
              <p id="picones"> Tem alguma palestra sobre Tecnologia? Fale com a gente!</p>
            </div>
            
            <div className="home">
              <div className="img-icones-home">
                <img src={require('./assets/img/crayon.png')} alt="microfone" />
              </div>


              <h2 id="hicones">Cursos e workshops</h2>
              <p id="picones">  Precisa de um espaço para passar um conhecimento adianta? Te ajudamos nisso.</p>
            </div>


          </div>
        </section>
        
              <button type="c" className="btn-teste btn-warning btn-rounded">Crie seu evento!</button>
      </div>
    );
  }
}

export default App;
