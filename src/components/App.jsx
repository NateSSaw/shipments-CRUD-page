// import * as API from './servises/Api';
import ShipmentsTable from './ShipmentsTable/ShipmentsTable';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';
import { Modal } from './Modal/Modal';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
  const [shipments, setShipments] = useState(data);
  const [isShowModal, setIsShowModal] = useState(false);
  localStorage.setItem('list', JSON.stringify(shipments));
  const showModal = () => setIsShowModal(true);

  const closeModal = () => setIsShowModal(false);

  const handleShow = orderNo => {
    setShipments(prevShipments => {
      return prevShipments.filter(shipments => shipments.orderNo === orderNo);
    });
  };

  const handleDelete = orderNo => {
    setShipments(prevShipments => {
      return prevShipments.filter(shipments => shipments.orderNo !== orderNo);
    });
  };

  return (
    <div>
      <ShipmentsTable>
        <TableHeader />
        <TableRow data={shipments} onShow={showModal} onDelete={handleDelete} />
      </ShipmentsTable>
      {isShowModal && <Modal closeModal={closeModal}></Modal>}
    </div>
  );
};
