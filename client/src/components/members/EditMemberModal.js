import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateMember } from '../../actions/memberAction.js';

const EditMemberModal = ({ current, updateMember }) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (current) {
            setName(current.name);
            setPhone(current.phone);
            setEmail(current.email);
        }
    }, [current]);


    const onSubmit = () => {

        if (name === '' || phone === '' || email === '') {
            M.toast({ html: 'Please enter a name , phone, email' });
        } else {
            const updMember = {
                _id: current._id,
                name,
                phone,
                email
            }

            updateMember(updMember);

            // M.toast({ html: `Member  ${name} updated` });

            //clear field
            setName('');
            setPhone('');
            setEmail('');
        }
    }

    return (
        <div id='edit-member-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Member Info</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />

                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='phone' value={phone} onChange={e => setPhone(e.target.value)} />

                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} />

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

EditMemberModal.propTypes = {
    current: PropTypes.object,
    updateMember: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.member.current
});

export default connect(mapStateToProps, { updateMember })(EditMemberModal);
