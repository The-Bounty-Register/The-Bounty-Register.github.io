import React, { useState } from 'react';
import './FAQs.css';
import AddIcon from '@mui/icons-material/Add';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  return (
    <div className="faqs">
      <h1>FAQS</h1>
      <div className="faq-item" onClick={() => toggleFAQ(1)}>
        <div className="faq-title">
          <span>How many devices will be installed in the gym?</span>
          <AddIcon className="add-icon" />
        </div>
        {openFAQ === 1 && <div className="faq-content">Number of devides installed in each gym depends on the individual needs of the gym and the application.</div>}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(2)}>
        <div className="faq-title">
          <span>How will you ensure people will honour the booking?</span>
          <AddIcon className="add-icon" />
        </div>
        {openFAQ === 2 && <div className="faq-content">Gym staff will be trained to handle situations where there is a conflict with regards to the booking. This will not be extra work for gyms, as staff are already trained to handle conflict situations that may occur in gyms without FitMeIn.</div>}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-title">
          <span>How long can a machine be booked for by one user?</span>
          <AddIcon className="add-icon" />
        </div>
        {openFAQ === 3 && <div className="faq-content">The lenght of time spent by one user on a machine will be determined by the client and the final product will have the capability to dynamically change that based on how busy the gym is at certain times.</div>}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-title">
          <span>Is it compatible with all gym machines?</span>
          <AddIcon className="add-icon" />
        </div>
        {openFAQ === 3 && <div className="faq-content">Yes, as long as there is space for a 10 inch tablet screen next to the machine</div>}
      </div>
    </div>
  );
}

export default FAQs;
