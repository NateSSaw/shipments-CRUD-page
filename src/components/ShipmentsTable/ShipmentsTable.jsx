import { TableHeader } from 'components/TableHeader/TableHeader';
import { TableRow } from 'components/TableRow/TableRow';

export default function ShipmentsTable({ data }) {
  return (
    <table>
      <TableHeader />
      <TableRow data={data} />
    </table>
  );
}
