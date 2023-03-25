import { useEffect } from 'react';

export const Modal = ({ closeModal }) => {
  useEffect(() => {
    const handlePressESC = e => {
      console.log('object :>> ', Date.now());
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handlePressESC);
    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-header">
          <h2>Shipment Details</h2>

          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body">
          <ul>
            <li>
              <h3>orderNo</h3>
              <p></p>
            </li>
            <li>
              <h3>date</h3>
              <p></p>
            </li>
            <li>
              <h3>customer</h3>
              <p></p>
            </li>
            <li>
              <h3>trackingNo</h3>
              <p></p>
            </li>
            <li>
              <h3>consignee</h3>
              <p></p>
            </li>
            <li>
              <h3>status</h3>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
