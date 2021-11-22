import React, { useEffect } from 'react'
import MemberFilter from './MemberFilter.js';
import MemberItem from './MemberItem.js';
import { connect } from 'react-redux';
import { getMembers, clearErrors } from '../../actions/memberAction.js';
import { setAlert } from '../../actions/alertActions.js';

const Members = ({ member: { members, error, loading, filtered }, getMembers, clearErrors, setAlert }) => {

    useEffect(() => {

        getMembers();
        clearErrors();

        // if (error === "Can Not Delete") {
        //     setAlert(error, 'danger');
        //     clearErrors();
        // }
    }, [])

    return (
        <div className="content">
            <h1>Members</h1>
            <MemberFilter />

            <table className="striped highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody>

                    {!loading && members !== null &&
                        filtered !== null
                        ?
                        filtered.map(member => (
                            <MemberItem member={member} key={member._id} error={error} />
                        ))

                        : members.map(member => (
                            <MemberItem member={member} key={member._id} error={error} />
                        ))
                    }
                </tbody>

            </table>

            <div className="fixed-action-btn">
                <a href="#add-member-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
                    <i className="large material-icons">add</i>
                </a>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    member: state.member
});

export default connect(mapStateToProps, { getMembers, clearErrors, setAlert })(Members);
