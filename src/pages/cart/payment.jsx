import React, { useState } from 'react';

export const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [submitResultText, setSubmitResultText] = useState('');
  const [paymentResultText, setPaymentResultText] = useState('');

  const handlePayment = () => {
    if (selectedPayment === 'bcr') {
      setPaymentResultText('Platesti cu BCR');
    } else if (selectedPayment === 'bt') {
      setPaymentResultText('Platesti cu BT');
    } else if (selectedPayment === 'ing') {
      setPaymentResultText('Platesti cu ING');
    }else if (selectedPayment === 'ramburs') {
        setPaymentResultText('Platesti la livrare');
    } else {
      setPaymentResultText('Alege metoda de plata');
    }
  };

  const handleReset = () => {
    setSelectedPayment('');
    setSubmitResultText('');
    setPaymentResultText('');
  };

  return (
    <div>
                 <h3>Alege metoda de plata:</h3>
      <input
        type="radio"
        id="bcrBtn"
        name="money"
        class="payments"
        onChange={() => setSelectedPayment('bcr')}
      /><label htmlFor="bcrBtn">BCR</label>
      
      <input
        type="radio"
        id="btBtn"
        name="money"
        class="payments"
        onChange={() => setSelectedPayment('bt')}
      /><label htmlFor="btBtn">BT</label>
      
      <input
        type="radio"
        id="ingBtn"
        name="money"
        class="payments"
        onChange={() => setSelectedPayment('ing')}
      /><label htmlFor="ingBtn">ING bank</label>
     
      <input
        type="radio"
        id="rambursBtn"
        name="money"
        class="payments"
        onChange={() => setSelectedPayment('ramburs')}
        /><label htmlFor="cashBtn">La livrare</label>
        <br /><br /><br />

      <button type="button" onClick={handlePayment} className="buttons">
        Continua plata
      </button>
      <button type="button" onClick={handleReset} className="buttons">
        Sterge
      </button>
      <p id="submitResult">{submitResultText}</p>
      <p id="paymentResult">{paymentResultText}</p>
    </div>
  );
};
