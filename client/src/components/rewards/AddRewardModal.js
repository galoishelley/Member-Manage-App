import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReward } from '../../actions/rewardAction.js';
// import  TechSelectOptions  from '../techs/TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js'

const AddRewardModal = ({ addReward }) => {
    const [name, setName] = useState('');

    const onSubmit = () => {
        if (name === '') {
            M.toast({ html: 'Please enter a name' });
        } else {
            const newReward = {
                name
            }

            addReward(newReward);

            // M.toast({ html: `Reward  ${name} added` });

            //clear field
            setName('');

        }
    }

    return (
        <div id='add-reward-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Reward Info</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />
                        <label htmlFor="name" className="active">
                            Name
                        </label>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '50%',
    height: '25%'

}

AddRewardModal.propTypes = {
    addReward: PropTypes.func.isRequired
}

export default connect(null, { addReward })(AddRewardModal);
