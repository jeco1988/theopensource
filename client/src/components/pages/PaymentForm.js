import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleCardChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
      return;
    }

    // Call API to process payment and save data to database
    const response = await fetch('/api/donations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: fullName,
        paymentMethodId: paymentMethod.id,
      }),
    });

    if (response.ok) {
      setSucceeded(true);
      setProcessing(false);
      setFullName('');
    } else {
      setError('Failed to process payment');
      setProcessing(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Form.Field>

      <Form.Field>
        <label>Card Details</label>
        <CardElement onChange={handleCardChange}/>
        {error && <div>{error}</div>}
      </Form.Field>

      <Button type="submit" disabled={processing || succeeded}>
        {processing ? 'Processing...' : 'Donate'}
      </Button>

      {succeeded && <div>Thank you for your donation!</div>}
    </Form>
  );
};
export default PaymentForm;