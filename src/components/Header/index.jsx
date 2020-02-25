import React from "react";
import {Menu, Dropdown,Segment} from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import {ORDERS, REFERENCE, SETTING_FIELDS, TARIFFS, TRANSPORTATION} from "../../router/link";

class Header extends React.Component {
    state={activeItem:'order'};

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.logout(this.props.history);
    }

    componentDidMount() {
        this.props.getUserInfo()
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const {t} = this.props;
        return (
            <Segment inverted>
                <Menu inverted poitnting secondary>
                    <Menu.Item
                        name='order'
                        active={activeItem==='order'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='transportation'
                        active={activeItem==='transportation'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='tariffs'
                        active={activeItem==='tariffs'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='setting-fields'
                        active={activeItem==='setting-fields'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='dictionaries'
                        active={activeItem==='dictionaries'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='profile'
                        active={activeItem==='profile'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Segment>
        )
    }
}

export default Header