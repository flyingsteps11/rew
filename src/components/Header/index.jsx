import React from "react";
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {ORDERS, REFERENCE, SETTING_FIELDS, TARIFFS, TRANSPORTATION} from "../../router/link";

class Header extends React.Component {
    state={};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <>
                <Menu>
                    <Menu.Item
                        to={ORDERS}
                        as={Link}
                        name='orders'
                        active={activeItem === 'orders'}
                        onClick={this.handleItemClick}
                    >
                        Заказы
                    </Menu.Item>
                    <Menu.Item
                        to={TRANSPORTATION}
                        as={Link}
                        name='transportation'
                        active={activeItem === 'transportation'}
                        onClick={this.handleItemClick}
                    >
                        Перевозки
                    </Menu.Item>
                    <Menu.Item
                        to={TARIFFS}
                        as={Link}
                        name='tariffs'
                        active={activeItem === 'tariffs'}
                        onClick={this.handleItemClick}
                    >
                        Тарифы
                    </Menu.Item>
                    <Menu.Item
                        to={SETTING_FIELDS}
                        as={Link}
                        name='setting fields'
                        active={activeItem === 'setting fields'}
                        onClick={this.handleItemClick}
                    >
                        Настройка полей
                    </Menu.Item>
                    <Menu.Item
                        to={REFERENCE}
                        as={Link}
                        name='reference'
                        active={activeItem === 'reference'}
                        onClick={this.handleItemClick}
                    >
                        Справочники
                    </Menu.Item>
                </Menu>
            </>
        )
    }
}

export default Header;