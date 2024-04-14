import DataTable from 'react-data-table-component';

export default function AcompPedido(){

    const columns = [
        {
          name: 'Produto',
          selector: row => row.produto,

        },
        {
          name: 'Situação atual',
          selector: row => row.situacao,
          width: "600px" 
        },
      ];
      
      const data = [
          {
          id: 1,
          produto: 'Criação de aplicação web para e-commerce',
          situacao: 'Desenvolvimento da UML do modelo de dados',
        }
      ]

      const myNewTheme= {
        rows: {
          style: {
            fontSize: '18px',
          },
        },
        headCells: {
          style: {
            fontSize: '18px',
          },
        },
      }

    return(
        <DataTable
        columns={columns}
        data={data}
        customStyles={myNewTheme}
      />
    )

}