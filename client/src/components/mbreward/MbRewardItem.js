import React from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../../actions/mbrewardAction.js';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { addMbReward } from '../../actions/mbrewardAction.js';

const MbRewardItem = ({ mbreward, addMbReward, setCurrent }) => {


    const onDelete = () => {

        const neMbReward = {
            _id: mbreward._id,
            reward_id: null
        }

        addMbReward(neMbReward);

        M.toast({ html: 'MbReward deleted' });
    }

    return (
        <tr>
            <td>{mbreward.name}</td>
            <td>{mbreward.reward_info !== null && mbreward.reward_info !== undefined && mbreward.reward_info[0].name}</td>
            <td>
                <a href="#edit-mbreward-modal" className='modal-trigger' onClick={() => setCurrent(mbreward)}>
                    <i className="material-icons grey-text">edit</i>
                </a>
                <a href="#!" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>


            </td>
        </tr>
    )
}

MbRewardItem.propTypes = {
    // reward: PropTypes.object.isRequired,
    addMbReward: PropTypes.func.isRequired
}


export default connect(null, { addMbReward, setCurrent })(MbRewardItem);
