import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//needing to setup STRIPE
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe('pk_test_51Mea0KBuGoigreWFgIl5jh7JSaIJfwQlD0yRnFnxHfGM84voyZQVD1k0rLtye9tCIaHySm20YNLtFYUMwS1ZMBR200njnJuoqY');

export default function Donate() {
  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>DONATE</Header>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
    </Container>
  );
}