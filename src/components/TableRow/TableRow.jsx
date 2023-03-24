export const TableRow = ({ data }) => {
  return (
    <tbody>
      {data.map(
        ({ orderNo, date, customer, trackingNo, status, consignee }) => {
          return (
            <tr key={orderNo}>
              <td>{orderNo}</td>
              <td>{date}</td>
              <td>{customer}</td>
              <td>{trackingNo}</td>
              <td>{status}</td>
              <td>{consignee}</td>
              <td>
                <button type="button">show</button>
                <button type="button">delete</button>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};
