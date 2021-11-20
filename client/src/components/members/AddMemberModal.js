import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMember } from '../../actions/memberAction.js';
// import  TechSelectOptions  from '../techs/TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js'

const AddMemberModal = ({ addMember }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = () => {
        if (name === '' || phone === '' || email === '') {
            M.toast({ html: 'Please enter a name , phone, email' });
        } else {
            const newMember = {
                name,
                phone,
                email
            }

            addMember(newMember);

            // M.toast({ html: `Member  ${name} added` });

            //clear field
            setName('');
            setPhone('');
            setEmail('');
        }
    }

    return (
        <div id='add-member-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Member Info</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />
                        <label htmlFor="name" className="active">
                            Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='phone' value={phone} onChange={e => setPhone(e.target.value)} />
                        <label htmlFor="phone" className="active">
                            phone
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="email" className="active">
                            email
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
    height: '75%'

}

AddMemberModal.propTypes = {
    addMember: PropTypes.func.isRequired
}

export default connect(null, { addMember })(AddMemberModal);
