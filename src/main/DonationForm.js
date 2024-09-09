import React from 'react';
import Modal from 'react-modal';
import CloseIcon from '../../src/images/close-icon.svg'

const DonationForm = ({ isOpen, onClose, student_id }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={{
          content: {
            height: '800px',
          },
        }}
        onRequestClose={onClose}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Donate</h2>
          <button className='close-button' onClick={onClose} style={{ fontSize: '16px', padding: '8px' }}><img src={CloseIcon}></img></button>
        </div>
        <iframe
          src={`${process.env.PUBLIC_URL}/donation.html?kptrk=${JSON.stringify({student_id, apiBaseUrl:process.env.REACT_APP_API_BASE_URL , accessTokenAPI:process.env.REACT_APP_API_TOKEN})}`}
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
