import React from "react"

function Coin({ TotalSupply, CirculatingSupply, Staking, BlockHeight, Burn }) { 
 
    return ( 
      <div className="coin"> 
        <div className="Name"> 
          <h1> Luna Classic Circulating supply</h1> 
        </div> 
   

   
        <div className="CSupply"> 
          <h3> Circ. Supply -------------------------------- {parseFloat((TotalSupply)-(Staking/1000000)).toLocaleString('pt-br', {minimumFractionDigits: 2})} LUNC</h3> 
        </div> 
   
    
   
     
         
        
          
      </div> 
      
    ) 
  }
  export default Coin;
