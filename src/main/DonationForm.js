import React from 'react';
import Modal from 'react-modal';

const DonationForm = ({ isOpen }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={{
          content: {
            height: '800px',
          },
        }}
      >
        <iframe
          src={`${process.env.PUBLIC_URL}/donation.html`}
          title="Donation Page"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </Modal>
    </div>
  );
};

export default DonationForm;
