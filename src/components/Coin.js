import React from "react"

function Coin({ TotalSupply, CirculatingSupply, Staking, BlockHeight, Burn }) { 
 
    return ( 
      <div className="coin"> 
        
        </div> 
   

   
        <div className="CSupply"> 
          <h3>  {parseFloat((TotalSupply)-(Staking/1000000)).toLocaleString('pt-br', {minimumFractionDigits: 2})}</h3> 
        </div> 
   
    
   
     
         
        
          
      </div> 
      
    ) 
  }
  export default Coin;
