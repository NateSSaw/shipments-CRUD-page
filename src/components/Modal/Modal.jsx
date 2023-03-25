import { useState, useEffect } from 'react';

export const Modal = ({ data, key }) => {
  const [isModal, setModal] = useState(false);
  const { orderNo, date, customer, trackingNo, status, consignee } = data;
  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') setModal(false);
    };

    window.addEventListener('keydown', handlePressESC);
    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [isModal]);

  return (
    <div className="modal">
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Shipment Details</h2>

          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setModal(true)}
          ></button>
        </div>
        <div className="modal-body">
          <ul>
            <li>
              <h3>orderNo</h3>
              <p>{orderNo}</p>
            </li>
            <li>
              <h3>date</h3>
              <p>{date}</p>
            </li>
            <li>
              <h3>customer</h3>
              <p>{customer}</p>
            </li>
            <li>
              <h3>trackingNo</h3>
              <p>{trackingNo}</p>
            </li>
            <li>
              <h3>consignee</h3>
              <p>{consignee}</p>
            </li>
            <li>
              <h3>status</h3>
              <p>{status}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
