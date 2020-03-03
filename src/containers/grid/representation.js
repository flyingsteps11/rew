import React from 'react'
import {
    Search,
    Button,
    Header,
    Modal,
    Grid,
    GridColumn,
    Input,
    Form,
    Table,
    Popup
} from "semantic-ui-react";

const RepresentationModal = () => {
    return (
        <Modal trigger={
            <Button className="settings"  icon='settings' size="big"/>
        }>
            <Modal.Header>
                Редактирование представления test
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Field>
                            <p>Наименование</p>
                            <Input/>
                        </Form.Field>


                        <Search placeholder='Поиск поля'/>
                    </Form>
                    <br/>
                    <Grid>
                        <GridColumn width={8}>
                            <Header as='h3' textAlign='center'>
                                Доступные поля
                            </Header>
                            <Table>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>IlYA</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>IlYA</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>IlYA</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </GridColumn>

                        <GridColumn width={8}>
                            <Header as='h3' textAlign='center'>
                                Выбранные поля
                            </Header>
                            <Table>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>IlYA</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>IlYA</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>IlYA</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </GridColumn>
                    </Grid>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button floated='left' negative>Удалить</Button>
                <Button color='grey'>Отменить</Button>
                <Button primary>Сохранить</Button>
            </Modal.Actions>

        </Modal>
    )
};
export default RepresentationModal