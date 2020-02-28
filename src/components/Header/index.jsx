import React from "react";
import {Menu, Dropdown, Segment} from 'semantic-ui-react';
import {Link, NavLink} from 'react-router-dom';
import {ORDERS, REFERENCE, SETTING_FIELDS, TARIFFS, TRANSPORTATION} from "../../router/link";
import UserBlock from "./UserBlock";
import PropTypes from "prop-types";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {};

    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {t, logout,userName, history, grids, settingFields, dictionaries} = this.props;
        const {activeItem} = this.state;
        return (
            <Segment inverted>
                <Menu inverted pointing secondary activeIndex={1}>
                    {
                        grids.map((grid, index) => {
                            return (
                                <Menu.Item
                                    to={grid.name}
                                    as={Link}
                                    name={grid.name}
                                    key={index}
                                    active={activeItem === grid.name}
                                    onClick={this.handleItemClick}
                                >
                                    {
                                        t(grid.name)
                                    }
                                </Menu.Item>
                            );
                        })
                    }
                    {
                       dictionaries.map((item, index) => {
                            return (
                                item.showOnHeader &&
                                <Menu.Item
                                    to={"/tariffs"}
                                    as={Link}
                                    name={item.name}
                                    key={index}
                                    active={activeItem === item.name}
                                    onClick={this.handleItemClick}
                                >
                                    {
                                        t(item.name)
                                    }
                                </Menu.Item>
                            );
                        })
                    }
                    {
                        settingFields &&
                        <Menu.Item
                            to={"/fields_setting"}
                            as={Link}
                            name="fields_setting"
                            active={activeItem === "fields_setting"}
                            onClick={this.handleItemClick}
                        >
                            {
                                t('fields_setting')
                            }
                        </Menu.Item>
                    }
                    <Menu.Item>
                        {
                            (dictionaries.length !== 0) &&

                            <Dropdown text={t("dictionaries")}>
                                <Dropdown.Menu>
                                    {
                                        dictionaries.map((item, index) => {
                                                return !item.showOnHeader && (
                                                    <Dropdown.Item
                                                        key={index}
                                                    >
                                                        {
                                                            t(item.name)
                                                        }
                                                    </Dropdown.Item>
                                                )
                                            }
                                        )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <UserBlock userName={userName} history={history} logout={logout}/>
                    </Menu.Menu>
                </Menu>
            </Segment>
        )
    }
}

Header.defaultProps = {
    userName:"",
    grids:[],
    settingFields:false,
    dictionaries:[],
};
Header.propTypes = {
    t: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    userName: PropTypes.string,
    grids: PropTypes.array.isRequired,
    settingFields: PropTypes.bool.isRequired,
    dictionaries: PropTypes.array.isRequired
};

export default Header

