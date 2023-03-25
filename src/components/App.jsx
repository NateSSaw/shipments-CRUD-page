// import * as API from './servises/Api';
import ShipmentsTable from './ShipmentsTable/ShipmentsTable';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
  return (
    <div>
      <ShipmentsTable data={data}>
        <TableHeader />
        <TableRow />
      </ShipmentsTable>
    </div>
  );
};
