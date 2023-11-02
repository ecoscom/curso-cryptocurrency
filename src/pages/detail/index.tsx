
import { useParams } from "react-router-dom"

import styles from './detail.modeulo.css'
import { useEffect } from "react";

interface CoinProp{
  symbol: string;
  name: string;
  price: string;
  market_cap: string;
  low_24h: string;
  hight_24h: string;
  total_volume_24h: string;
  delta_24h: string;
  formatedPrice: string;
  formatedMarket: string;
  formatedLowprice: string;
  formatedHightprice: string;
  error?: string;
}

export function Detail(){

  const { cripto } = useParams();

  useEffect(() => {
    function getData() {
      fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=022ce28bd6a57dfc&symbol=${cripto}`)
      .then(response => response.json())
      .then((data:CoinProp) => {
        let price = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        })


      })

    }

    getData();
  }, [])

  return(
    <div>
      <h1>Pagina Detalhes: {cripto}</h1>
    </div>
  )
}