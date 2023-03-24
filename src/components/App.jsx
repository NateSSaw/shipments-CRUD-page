// import * as API from './servises/Api';
import ShipmentsTable from './ShipmentsTable/ShipmentsTable';
import data from './data.json';

export const App = () => {
  return (
    <div>
      <ShipmentsTable data={data} />
    </div>
  );
};
