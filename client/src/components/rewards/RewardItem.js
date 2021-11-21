import React from 'react';
import { connect } from 'react-redux';
import { deleteReward, setCurrent } from '../../actions/rewardAction.js';
import PropTypes from 'prop-types';

const RewardItem = ({ reward, deleteReward, setCurrent }) => {

    const onDelete = () => {
        deleteReward(reward._id);
        // M.toast({ html: 'Reward deleted' });
    }

    return (
        <tr>
            <td>{reward.name}</td>
            <td>
                <a href="#edit-reward-modal" className='modal-trigger' onClick={() => setCurrent(reward)}>
                    <i className="material-icons grey-text">edit</i>
                </a>
                <a href="#!" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>


            </td>
        </tr>
    )
}

RewardItem.propTypes = {
    reward: PropTypes.object.isRequired,
    deleteReward: PropTypes.func.isRequired
}


export default connect(null, { deleteReward, setCurrent })(RewardItem);
