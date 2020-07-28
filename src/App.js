import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Caroseul from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Oque é Front-End? Trabalhando na area."}
      />
      <Caroseul
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Caroseul
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Caroseul
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Caroseul
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Caroseul
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Caroseul
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer></Footer>

    </div>
  );
}

export default App;
