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
          <span>tech specs</span>
          <AddIcon className="add-icon" />
        </div>
        {openFAQ === 1 && <div className="faq-content">Content for tech specs</div>}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(2)}>
        <div className="faq-title">
          <span>tech specs</span>
          <AddIcon className="add-icon" />
        </div>
        {openFAQ === 2 && <div className="faq-content">Content for tech specs</div>}
      </div>
      <div className="faq-item" onClick={() => toggleFAQ(3)}>
        <div className="faq-title">
          <span>tech specs</span>
          <AddIcon className="add-icon" />
        </div>
        {openFAQ === 3 && <div className="faq-content">Content for tech specs</div>}
      </div>
    </div>
  );
}

export default FAQs;
