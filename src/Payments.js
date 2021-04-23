import React from 'react'

export const Payments = () => {
    return (
        <div>
        <div className = 'payments'>
           <label className = 'label' style = {{fontSize: '23px', paddingRight: '15px', lineHeight: '31px'}}>Withdraw </label>
            <span>
            <button className = 'paypal-btn btns'><span style = {{paddingRight: '10px'}}><i className = "fab"></i></span>
               Paypal Account</button>
             </span>
             <span>  
            <button className = 'bank-btn btns'>
                <span style = {{paddingRight: '10px'}}>
                <i class="fas fa-money-check-alt fa-2x"></i>
                </span>
               Bank Transfer
               
               </button>
            </span> 
        </div>
        </div>
    )
}
