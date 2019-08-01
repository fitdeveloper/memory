import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import '../tables/Table.css'
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


function onInsertRow(row) {
    let newRowStr = ''
   
    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n'
    }
    alert('You inserted:\n ' + newRowStr)
  }
   
   
  function onDeleteRow(rowKeys) {
    alert('You deleted: ' + rowKeys)
  }
   
  class Table7 extends Component {
    render() {
      const options = {
        afterInsertRow: onInsertRow,
        afterDeleteRow: onDeleteRow
      }
   
      // To delete rows you be able to select rows
      const selectRowProp = {
        mode: 'checkbox'
      }
   
      return (
        <div>
          <BootstrapTable data={this.props.data}
                          insertRow={true}
                          deleteRow={true}
                          selectRow={selectRowProp}
                          options={options}
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
   
  export default Table7