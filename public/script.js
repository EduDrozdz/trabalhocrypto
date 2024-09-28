const { response } = require("express");

const bitbtn = document.getElementById('bitbtn');
const dolarbtn = document.getElementById('usdbtn');
const ethereumbtn = document.getElementById('ethbtn');
const realbtn = document.getElementById('brlbtn');

function getBitcoin(){
  try {
    fetch('http://localhost:3002/api/bitcoin').then
    (function (response){
      return response.json();
    }).then(function (data){
      const bitpriceDiv = document.getElementById('price');
      bitpriceDiv.innerHTML = `Preço em <span>&nbsp;BitCoin&nbsp;</span> de: Ethereum ${data.eth}, Real ${data.brl}, Dolar ${data.usd}`;
    })
  } catch (error) {
    console.error('Erro ao obter preços do Bitcoin:', error);
    bitpriceDiv.innerHTML = 'Erro ao obter preços do Bitcoin';
  }
}

function getDolar(){
  try {
    fetch('http://localhost:3002/api/dolar').then
    (function (response){
      return response.json();
    }).then(function(data){
      const bitpriceDiv = document.getElementById('price');
      bitpriceDiv.innerHTML = `Preço em <span>&nbsp;Dolar&nbsp;</span> de: Ethereum ${data.eth}, Real ${data.brl}, BitCoin ${data.btc}`;
    })
  } catch (error) {
    console.error('Erro ao obter preços do Dolar:', error);
    bitpriceDiv.innerHTML = 'Erro ao obter preços do Dolar';
  }
}

function getEth(){
  try {
    fetch('http://localhost:3002/api/ethereum').then
    (function (response){
      return response.json();
    }).then(function(data){
      const bitpriceDiv = document.getElementById('price');
      bitpriceDiv.innerHTML = `Preço em <span>&nbsp;Ethereum&nbsp;</span> de: Dolar ${data.usd}, Real ${data.brl}, BitCoin ${data.btc}`;
    })
  } catch (error) {
    console.error('Erro ao obter preços do Ethereum:', error);
    bitpriceDiv.innerHTML = 'Erro ao obter preços do Ethereum';
  }
  }


  function getReal(){
    try {
      fetch('http://localhost:3002/api/real').then
      (function (response){
        return response.json();
      }).then(function(data){
        const bitpriceDiv = document.getElementById('price');
        bitpriceDiv.innerHTML = `Preço em <span>&nbsp;Real&nbsp;</span> de: Ethereum ${data.eth}, Dolar ${data.usd}, BitCoin ${data.btc}`;
      })
  } catch (error) {
    console.error('Erro ao obter preços do Real:', error);
    bitpriceDiv.innerHTML = 'Erro ao obter preços do Real';
  }
}