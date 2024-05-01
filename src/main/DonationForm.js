import React, { useEffect } from 'react';

const DonationForm = () => {
  return(
    <iframe src={`${process.env.PUBLIC_URL}/donation.html`} title="Registration Page" />
  )
}

export default DonationForm;
