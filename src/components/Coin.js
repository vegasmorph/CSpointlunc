import React from "react"

function Coin({ TotalSupply, CirculatingSupply, Staking, BlockHeight, Burn }) { 
 
    return ( 
       <div className="coin"> 
        <div className="Name"> 
          
        </div> 

  
        <div className="CSupply"> 
          <h1>  {parseFloat((TotalSupply)-(Staking/1000000)).toLocaleString('pt-br', {minimumFractionDigits: 2})}</h1> 
        </div> 
   
    
   
     
         
        
          
      </div> 
      
    ) 
  }
  export default Coin;
