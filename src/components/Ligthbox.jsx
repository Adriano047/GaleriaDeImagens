import React, { useState, useEffect } from 'react';
import Fechar from '../Icones/Sair.png'
import Anterior from '../Icones/Anterior.png'
import Proximo from '../Icones/Proxima.png'
import '../styles/Ligthbox.css';

function Lightbox({ Aberto, Fechado, imagens, imagemSelecionada }) {

const [currentSlide, setCurrentSlide] = useState(0)

useEffect(() => {
  if (imagemSelecionada) {
    setCurrentSlide(imagens.indexOf(imagemSelecionada));
  } else {
    setCurrentSlide(0);
  }
}, [imagemSelecionada, imagens]);
const slideAnterior = () => {
  setCurrentSlide((prevSlide) => (prevSlide - 1 + imagens.length) % imagens.length);
};

const proximoSlide = () => {
  setCurrentSlide((prevSlide) => (prevSlide + 1) % imagens.length);
};
if (!Aberto) {
  return null;
}

return (
  <>
    <div className='lightbox'>
      <div className="lightbox-container">
        <img src={imagens[currentSlide]} alt='galeria' />
      </div>
    </div>
    <div className='fechar-lightbox' onClick={Fechado}>
      <img src={Fechar} alt="fechar" />
    </div>
    <div className='Anterior' onClick={slideAnterior}>
      <img src={Anterior} alt="Anterior" />
    </div>
    <div className='Proxima' onClick={proximoSlide}>
      <img src={Proximo} alt="Proximo" />
    </div>
  </>
);
}
export default Lightbox