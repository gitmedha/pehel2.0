import React, { useEffect } from 'react';
import App from '../'

const DonationForm = () => {
  return(
    <iframe src={`${process.env.PUBLIC_URL}/donation.html`} title="Registration Page" />
  )
}

export default DonationForm;
