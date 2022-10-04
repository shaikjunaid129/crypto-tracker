import React from 'react'
import Navbar from './Navbar'
import MaterialTable from 'material-table'
import { useState, useEffect } from 'react';
import './Currencies.css'


function Currencies() {
  const [data, setData] = useState([])
  const columns = [
    {title:"Rank" , field: "market_cap_rank"},
    {title:"Name" , field: "name"},
    {title:"Price(USD)" , field: "current_price"},
    {title:"24h Change (USD)" , field: "price_change_24h"},
    {title:"MarketCap" , field: "market_cap"},
  ]
  useEffect(() => {
    fetch ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'")
          .then(resp => resp.json())
          .then(resp => {
            setData(resp)
          })
      },[])
      

  return (
    <>
    <Navbar/>
    
    <MaterialTable 
    
     title = "Top 100 crypto currencies"
     data = {data}
     columns = {columns}
     
     />
    </>
        
        
    
  );



  }
  


export default Currencies