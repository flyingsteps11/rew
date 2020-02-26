import React from 'react';
import PropTypes from "prop-types";
import {Dropdown} from "semantic-ui-react";


const UserBlock = ({userName, logout, history}) => {
    return (
        <Dropdown text={userName}>
            <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={()=>history.push('/profile')}>
                    Profile
                </Dropdown.Item>
                <Dropdown.Item as ="button" onClick={()=>logout(history)}>
                    Log out
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};


UserBlock.propTypes = {
    history: PropTypes.shape({}).isRequired,
    logout: PropTypes.func.isRequired,
    userName: PropTypes.string
};
export default UserBlock;