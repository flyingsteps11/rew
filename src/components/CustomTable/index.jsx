import React,{Component} from 'react';
import {Button,Icon,Label,Menu,Table,Checkbox} from 'semantic-ui-react';
import  "../../assets/styles/index.css"


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

            </Table>


        )
    }
}


export default CustomTable
