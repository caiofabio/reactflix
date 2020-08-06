import React, { useEffect, useState } from 'react';
import PagesDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Caroseul from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      });
    // .catch((err) => {
    // console.log(err.message);
    // });
  }, []);

  return (
    <PagesDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Caroseul
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Caroseul
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PagesDefault>
  );
}

export default Home;
