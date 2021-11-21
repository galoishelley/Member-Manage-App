import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DropItem = ({ item: { _id, name } }) => {

    return (
        <Fragment>
            <option value={_id}>{name}</option>
        </Fragment >
    )
}

DropItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default DropItem;
