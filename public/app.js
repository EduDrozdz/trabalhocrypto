// app.use(express.static('public'));
const cors = require('cors')
const express = require("express");
const app = express();
app.use(cors())

async function getBitcoinPrices() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eth,brl,usd');
    const data = await response.json();
    const btcPrice = data.bitcoin;
    return {
      eth: btcPrice.eth,
      brl: btcPrice.brl,
      usd: btcPrice.usd
    };
  } catch (error) {
    console.error('Erro ao obter preços do Bitcoin:', error);
    return null;
  }
}

async function getDolarPrices() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/last/BRL-USD,ETH-USD,BTC-USD');
    const data = await response.json();
    return {
      brl: data.BRLUSD.bid,
      eth: data.ETHUSD.bid,
      btc: data.BTCUSD.bid
    };
  } catch (error) {
    console.error('Erro ao obter preços do Dolar:', error);
    return null;
  }
}

async function getEthereumPrices() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl,usd,btc');
    const data = await response.json();
    const ethPrice = data.ethereum;
    return {
      brl: ethPrice.brl,
      usd: ethPrice.usd,
      btc: ethPrice.btc
    };
  } catch (error) {
    console.error('Erro ao obter preços do Ethereum:', error);
    return null;
  }
}

async function getRealPrices() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,ETH-BRL,BTC-BRL');
    const data = await response.json();
    return {
      usd: data.USDBRL.bid,
      eth: data.ETHBRL.bid,
      btc: data.BTCBRL.bid
    };
  } catch (error) {
    console.error('Erro ao obter preços do Real:', error);
    return null;
  }
}

app.get('/api/bitcoin', async (req, res) => {
  const bitcoinPrices = await getBitcoinPrices();
  if (bitcoinPrices) {
    res.json(bitcoinPrices);
  } else {
    res.status(500).json({ error: 'Erro ao obter preços do Bitcoin' });
  }
});

app.get('/api/dolar', async (req, res) => {
  const dolarPrices = await getDolarPrices();
  if (dolarPrices) {
    res.json(dolarPrices);
  } else {
    res.status(500).json({ error: 'Erro ao obter preços do Dolar' });
  }
});

app.get('/api/ethereum', async (req, res) => {
  const ethereumPrices = await getEthereumPrices();
  if (ethereumPrices) {
    res.json(ethereumPrices);
  } else {
    res.status(500).json({ error: 'Erro ao obter preços do Ethereum' });
  }
});

app.get('/api/real', async (req, res) => {
  const realPrices = await getRealPrices();
  if (realPrices) {
    res.json(realPrices);
  } else {
    res.status(500).json({ error: 'Erro ao obter preços do Real' });
  }
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});