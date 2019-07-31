import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { func } from "prop-types";

function App(props) {
  // Entrada, Rodando, Fim
  const [estado, setEstado] = useState("ENTRADA");
  // 0 a 300
  const [palpite, setPalpite] = useState(150);
  // quantidade de palpites
  const [numPalpites, setNumPalpites] = useState(1);
  // min e max
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarPartida = () => {
    setEstado("RODANDO");
    setMax(300);
    setMin(0);
    setPalpite(150);
    setNumPalpites(1);
  };

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  const telaInicial = () => {
    setEstado("ENTRADA");
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "ENTRADA") {
    return (
      <div>
        <p>Escolha um número entre 0 e 300. Escolheu ? Vamos lá !</p>
        <button onClick={iniciarPartida}>Começar a Jogar</button>
      </div>
    );
  }

  if (estado === "FIM") {
    return (
      <div>
        <p>
          ACERTOU !!! Palpite: {palpite}, em {numPalpites} chutes!
        </p>
        <button onClick={iniciarPartida}>Começar um novo Jogo</button>
        <button onClick={telaInicial}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Seu numero é {palpite}?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
