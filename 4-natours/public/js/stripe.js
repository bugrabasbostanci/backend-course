import axios from 'axios';
import { showAlert } from './alerts';
import { loadStripe } from '@stripe/stripe-js';

export const bookTour = async tourId => {
  const stripe = await loadStripe(
    'pk_test_51OeMTUGYTTLtSltrpusAjyKw4rKAxh4AnjPaA8OazpzmQO9dx4CsHbhUaK58hqQ33b7chRfk6vPc1L0yag7gJ2Ck00bnDHRwNT'
  );

  try {
    // 1) Get Checkout session
    const response = await axios.get(`/v1/bookings/checkout-session/${tourId}`);
    const session = response.data.session;

    // 2) Redirect to checkout form
    await stripe.redirectToCheckout({
      sessionId: session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error');
  }
};
