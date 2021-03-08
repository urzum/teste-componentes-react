import React from 'react';
import MaterialTable from 'material-table';

const DataGridBrowser: React.FC = () => {
  const colunas = [
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear' },
    { title: 'Birth Place', field: 'birthCity' },
  ];

  const dados = [
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    {
      name: 'Zerya Betül',
      surname: 'Baran',
      birthYear: 2017,
      birthCity: 34,
    },
  ];

  return (
    <MaterialTable
      title="Simple Action Preview"
      columns={colunas}
      data={dados}
      actions={[
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: () => ({}),
        },
      ]}
    />
  );
};

export default DataGridBrowser;

// import React from 'react';
// import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
// import { makeStyles } from '@material-ui/core/styles';
// import { BiSearchAlt } from 'react-icons/bi';
// import { Container } from './styles';

// const useStyles = makeStyles({
//   dataGridStyles: {
//     background: 'blue',
//   },
// });

// const DataGridBrowser: React.FC = () => {
//   const classes = useStyles();
//   const rows: RowsProp = [
//     { id: 1, col1: 'Hello', col2: 'World' },
//     { id: 2, col1: 'XGrid', col2: 'is Awesome' },
//     { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
//   ];

//   const columns: ColDef[] = [
//     { field: 'col1', headerName: 'Column 1', width: 150 },
//     { field: 'col2', headerName: 'Column 2', width: 150 },
//   ];

//   return (
//     <Container>
//       <DataGrid
//         className={classes.dataGridStyles}
//         autoPageSize
//         showToolbar
//         rowHeight={26}
//         rows={rows}
//         columns={columns}
//       />
//     </Container>
//   );
// };

// export default DataGridBrowser;
