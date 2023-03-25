import { nanoid } from 'nanoid';
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
                <button type="button" obj={orderNo} onClick={onShow}>
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
