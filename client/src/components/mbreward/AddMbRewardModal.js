import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRewards } from '../../actions/rewardAction.js';
import DropItem from './DropItem.js';
import { getMbMembers_hasnull, addMbReward } from '../../actions/mbrewardAction.js';


import M from 'materialize-css/dist/js/materialize.min.js'

const AddMbRewardModal = ({ member: { members }, mbreward: { mbmembers, loading }, reward: { rewards }, getRewards, addMbReward, getMbMembers_hasnull }) => {

    const [mb_member, setMb_member] = useState('');
    const [reward_id, setReward_id] = useState('');

    useEffect(() => {

        // var elems = document.querySelectorAll('select');

        // var instance = M.FormSelect.getInstance(elems);

        //no reward id member
        getMbMembers_hasnull();
        getRewards();
    }, [members]);

    const onSubmit = () => {
        if (mb_member === '' || reward_id === "") {
            M.toast({ html: 'Please choose one' });
        } else {
            const neMbReward = {
                _id: mb_member,
                reward_id
            }

            addMbReward(neMbReward);

            // M.toast({ html: `Reward  ${name} added` });

            //clear field
            setMb_member('');
            setReward_id('');
        }
    }


    return (
        <div id='add-mbreward-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Member's Reward Info</h4>

                <div className="row">

                    <div className="input-field col s12">
                        {/* <label>
                            Members Select
                        </label> */}
                        <select name="mb_member" value={mb_member} className="browser-default" onChange={e => setMb_member(e.target.value)}>
                            <option value="" disabled defaultValue>Choose member</option>
                            {
                                !loading && mbmembers !== null
                                    ?
                                    mbmembers.map(item => (<DropItem key={item._id} item={item} />))
                                    : <option value="" disabled defaultValue>No Member Choose</option>
                            }
                        </select>
                    </div>
                </div>

                <div className="row" >
                    <div className="input-field col s12">
                        {/* <label>Browser Select</label> */}
                        <select name="mb_reward" value={reward_id} className="browser-default" onChange={e => setReward_id(e.target.value)}>
                            <option value="" disabled defaultValue>Choose reward</option>
                            {
                                !loading && rewards !== null
                                    ?
                                    rewards.map(item => (<DropItem key={item._id} item={item} />))
                                    : <option value="" disabled defaultValue>No Reward Choose</option>
                            }
                        </select>
                    </div>

                </div >

                <div className="modal-footer" >
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
                </div >
            </div >
        </div >
    )
}

const modalStyle = {
    width: '50%',
    height: '75%'

}

AddMbRewardModal.propTypes = {
    addMbReward: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    mbreward: state.mbreward,
    reward: state.reward,
    member: state.member
});

export default connect(mapStateToProps, { addMbReward, getMbMembers_hasnull, getRewards })(AddMbRewardModal);
