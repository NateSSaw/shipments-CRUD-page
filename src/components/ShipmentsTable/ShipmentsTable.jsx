import { TableHeader } from 'components/TableHeader/TableHeader';
import { TableRow } from 'components/TableRow/TableRow';
import { useState, useEffect } from 'react';

export default function ShipmentsTable({ data }) {
  const [shipments, setShipments] = useState(data);
  localStorage.setItem('list', JSON.stringify(shipments));

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
    <table>
      <TableHeader />
      <TableRow data={shipments} onShow={handleShow} onDelete={handleDelete} />
    </table>
  );
}
