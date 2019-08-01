import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../tables/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

function onSelectRow(row, isSelected, e) {
    if (isSelected) {
      alert(`You just selected '${row['name']}'`)
    }
  }
   
  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    unselectable: [2],
    selected: [1],
    onSelect: onSelectRow,
    bgColor: 'gold'
  };
   
  class Table4 extends Component {
    render() {
      return (
        <div>
          <BootstrapTable data={this.props.data} 
                          selectRow={selectRowProp}
          >
            <TableHeaderColumn isKey dataField='id'
            >
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField='name'
            >
              Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='value'
            >
              Value
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      )
    }
  }
   
  export default Table4