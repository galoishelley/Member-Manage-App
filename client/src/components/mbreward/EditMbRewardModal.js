import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateReward } from '../../actions/rewardAction.js';

const EditRewardModal = ({ current, updateReward }) => {

    const [name, setName] = useState('');

    useEffect(() => {
        if (current) {
            setName(current.name);
        }
    }, [current]);


    const onSubmit = () => {

        if (name === '') {
            M.toast({ html: 'Please enter a name' });
        } else {
            const updReward = {
                id: current.id,
                name
            }

            updateReward(updReward);

            M.toast({ html: `Reward  ${name} updated` });

            //clear field
            setName('');
        }
    }

    return (
        <div id='edit-reward-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Reward Info</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />

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
    height: '75%'

}

EditRewardModal.propTypes = {
    current: PropTypes.object,
    updateReward: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.reward.current
});

export default connect(mapStateToProps, { updateReward })(EditRewardModal);
