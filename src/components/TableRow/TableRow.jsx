import { nanoid } from 'nanoid';
import { Modal } from 'components/Modal/Modal';
export const TableRow = ({ data, onDelete, onShow }) => {
  return (
    <tbody>
      {data.map(
        ({ orderNo, date, customer, trackingNo, status, consignee }) => {
          return (
            <tr key={nanoid()}>
              <td>{orderNo}</td>
              <td>{date}</td>
              <td>{customer}</td>
              <td>{trackingNo}</td>
              <td>{status}</td>
              <td>{consignee}</td>
              <td>
                <button type="button" onClick={() => onShow(orderNo)}>
                  show
                </button>
                <button type="button" onClick={() => onDelete(orderNo)}>
                  delete
                </button>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};
