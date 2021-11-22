import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteMember, setCurrent, clearCurrent, clearErrors } from '../../actions/memberAction.js';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';



const MemberItem = ({ member, error, deleteMember, setCurrent, clearCurrent, clearErrors }) => {

    const onDelete = () => {
        console.log(error);
        if (error === "Can Not Delete") {
            M.toast({ html: `Member ${member.name} can not be deleted` });

        }
        clearErrors();
        deleteMember(member._id);

        clearCurrent();
    }

    return (
        <tr>
            <td>{member.name}</td>
            <td>{member.phone}</td>
            <td>{member.email}</td>
            <td>
                <a href="#edit-member-modal" className='modal-trigger' onClick={() => setCurrent(member)}>
                    <i className="material-icons grey-text">edit</i>
                </a>
                <a href="#!" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>


            </td>
        </tr>
    )
}

MemberItem.propTypes = {
    member: PropTypes.object.isRequired,
    deleteMember: PropTypes.func.isRequired
}


export default connect(null, { deleteMember, setCurrent, clearCurrent, clearErrors })(MemberItem);
