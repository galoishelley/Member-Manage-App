import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DropItem from './DropItem.js';

import { updateMember } from '../../actions/memberAction.js';
import { addMbReward } from '../../actions/mbrewardAction.js';

const EditMbRewardModal = ({ current, updateMember, reward: { rewards }, mbreward: { mbmembers, loading }, addMbReward }) => {

    const [_id, set_id] = useState('');
    const [reward_id, setReward_id] = useState('');

    useEffect(() => {
        if (current) {

            set_id(current._id);
            setReward_id(current.reward_id);
        }
    }, [current]);


    const onSubmit = () => {

        if (_id === '' || reward_id === "") {
            // M.toast({ html: 'Please choose one' });
        } else {
            const neMbReward = {
                _id: _id,
                reward_id
            }

            addMbReward(neMbReward);

            // M.toast({ html: `Reward  ${name} added` });

            //clear field
            set_id('');
            setReward_id('');
        }
    }

    return (
        <div id='edit-mbreward-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Edit Member's Reward Info</h4>


                <div className="row">

                    <div className="input-field col s12">
                        {/* <label>
                            Members Name
                        </label> */}

                        {current !== null && <input type="text" value={current.name} onChange={e => set_id(e.target.value)} />}
                        {/* <select name="mb_member" className="browser-default" value={current.name}>
                            {/* <option value={current._id} disabled defaultValue>{current.name}</option> 
                    </select> */}
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
    height: '40%'

}

EditMbRewardModal.propTypes = {
    current: PropTypes.object,
    // updateMember: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.member.current,
    reward: state.reward,
    mbreward: state.mbreward,
});

export default connect(mapStateToProps, { updateMember, addMbReward })(EditMbRewardModal);
