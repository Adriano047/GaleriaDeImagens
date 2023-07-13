import React, { useState } from 'react';
import '../styles/App.css';
import Ligthbox from './Ligthbox';
import {imagens} from './imgs'



function Imgs() {
  const [lightboxAberta, setLightboxAberta] = useState(false);
  const [selecionarImagem, setSelecionarImagem] = useState(null);
 
  const abrirLightbox = (imagem) => {
    setSelecionarImagem(imagem);
    setLightboxAberta(true);
  };

  const fecharLightbox = () => {
    setLightboxAberta(false);
  };
  
  return (
    <div className='Galeria'>
      {imagens.map((imagem, index) => (
        <div className="Item-Galeria" key={index}>
          <img src={imagem} data-index={`${index + 1}`} alt={`Imagem ${index + 1}`}
            onClick={() => abrirLightbox(imagem)} />
            
        </div>
      ))}
      <Ligthbox Aberto={lightboxAberta} Fechado={fecharLightbox}  imagens={imagens}
        imagemSelecionada={selecionarImagem} />
    </div>
  );
}
export default Imgs