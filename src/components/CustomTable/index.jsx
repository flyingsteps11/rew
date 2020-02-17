import React,{Component} from 'react';
import {Button,Icon,Label,Menu,Table,Checkbox} from 'semantic-ui-react'


class CustomTable extends Component {
    render() {
        const {columns = [], rows = [], onclickRow, deleteRow, selectedRows,handleChangeSelectedRows} = this.props;
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {columns.map(item => {
                            return (<Table.HeaderCell>
                                {
                                    item.text
                                }
                            </Table.HeaderCell>)
                        })}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {

                        rows.map(row => {
                            return (
                                <Table.Row>{
                                    columns.map(col => {
                                        return (
                                            <> {
                                                col.key == 'check'? <Table.Cell>
                                                        <Checkbox
                                                            checked={selectedRows.has(row.id)}
                                                            onChange={()=>handleChangeSelectedRows(row.id)}
                                                        />
                                                    </Table.Cell>
                                                    : col.key !== 'action' ? <Table.Cell onClick={(event) => onclickRow(row.id)}>
                                                        {
                                                            row[col.key]
                                                        }
                                                    </Table.Cell> :
                                                    <Table.Cell>
                                                        <div className="buto">
                                                            <Button>
                                                                <Icon name="trash alternate" onClick={() => deleteRow(row.id)}/>
                                                            </Button>
                                                        </div>
                                                    </Table.Cell>
                                            }
                                            </>
                                        )
                                    })}
                                </Table.Row>

                            )
                        })
                    }


                </Table.Body>
            </Table>


        )
    }
}


export default CustomTable
