import "./App.css"; 
import { useEffect, useState } from "react"; 
import Coin from "./components/Coin"; 
 
function App() { 
  const [ totalSupply, setTotalSupply ] = useState() 
  const [ circulatingSupply, setCirculatingSupply ] = useState() 
  const [ staking, setStaking ] = useState() 
  const [ latestBlock , setLatestBlock ] = useState() 
   const [ burn , setBurn ] = useState([]) 
   
  useEffect(() => { 
    fetchData1(); 
    fetchData2(); 
    fetchData3(); 
    fetchData4(); 
    fetchData5(); 
    
  }, []); 
 
  const fetchData1 = async () => { 
    try { 
      const data = await fetch("https://fcd.terra.dev/v1/totalsupply/luna"); 
      const result1 = await data.json(); 
      setTotalSupply(result1) 
    } catch (err) { 
      console.error(err); 
    } 
  } 
 
  const fetchData2 = async () => { 
    try { 
      const data2 = await fetch("https://fcd.terra.dev/v1/circulatingsupply/luna"); 
      const result2 = await data2.json(); 
      setCirculatingSupply(result2) 
    } catch (err) { 
      console.error(err); 
    } 
  } 
 
  const fetchData3 = async () => { 
    try { 
      const data3 = await fetch("https://lcd.terra.dev/cosmos/staking/v1beta1/pool"); 
      const result3 = await data3.json(); 
      setStaking(result3.pool.bonded_tokens ); 
    } catch (err) { 
      console.error(err); 
    } 
  } 
 
  const fetchData4 = async () => { 
    try { 
      const data4 = await fetch("https://fcd.terra.dev/blocks/latest"); 
      const result4 = await data4.json(); 
      setLatestBlock(result4.block.header.height) 
    } catch (err) { 
      console.error(err); 
    } 
  } 
 
  const fetchData5 = async () => {
    try {
      const data5 = await fetch('https://fcd.terra.dev/v1/txs?account=terra1sk06e3dyexuq4shw77y3dsv480xv42mq73anxu');
      const result5 = await data5.json();
      const burnList = result5.txs.map((tx) => {
        console.log(tx)
        if (tx.tx.value.msg[0].type === 'wasm/MsgExecuteContract') {
          return {
            chainId: tx.chainId,
            height: tx.height,
            amount: tx.tx.value.msg[0].value.coins[0].amount,
          };
        } else if (tx.tx.value.msg[0].type === 'bank/MsgSend') {
          return {
            chainId: tx.chainId,
            height: tx.height,
            amount: tx.tx.value.msg[0].value.amount[0].amount,
          };
        } else {
          return {
            chainId: tx.chainId,
            height: tx.height,
            amount: 0,
          };
        }
      });
      setBurn(burnList);
      console.log(burnList);
    } catch (err) {
      console.error(err);
    }
  }; 

 

 
 
  return ( 
    <div className="App"> 
      <Coin 
        TotalSupply={totalSupply} 
        CirculatingSupply={circulatingSupply} 
        Staking={staking} 
        BlockHeight={latestBlock} 
        Burn={burn} 
      /> 
    </div> 
   );  
} 

export default App;