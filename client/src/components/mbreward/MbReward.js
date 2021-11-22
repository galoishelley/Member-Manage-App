import React, { useEffect } from 'react'
import MbRewardFilter from './MbRewardFilter.js';
import MbRewardItem from './MbRewardItem.js';
import { connect } from 'react-redux';
import { getMBHasReward } from '../../actions/mbrewardAction.js';
import { getMbMembers_aggregate } from '../../actions/mbrewardAction.js';
import { loadUser } from '../../actions/authActions.js';


const MbReward = ({ member: { members }, mbreward: { mbrewards, loading, filtered }, getMBHasReward, getMbMembers_aggregate }) => {

    useEffect(() => {
        // getMBHasReward();
        //has reward members
        // loadUser();
        getMbMembers_aggregate();
    }, [mbrewards]);

    return (
        <div className="content">
            <h1>Member's reward</h1>
            <MbRewardFilter />

            <table className="striped highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>Member Name</th>
                        <th>Reward Name</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody>

                    {!loading && mbrewards !== null &&
                        filtered !== null
                        ?
                        filtered.map(item => (
                            <MbRewardItem mbreward={item} key={item._id} />
                        ))

                        : mbrewards.map(item => (
                            <MbRewardItem mbreward={item} key={item._id} />
                        ))
                    }
                </tbody>

            </table>

            <div className="fixed-action-btn">
                <a href="#add-mbreward-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
                    <i className="large material-icons">add</i>
                </a>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    mbreward: state.mbreward,
    member: state.member
});

export default connect(mapStateToProps, { getMBHasReward, getMbMembers_aggregate })(MbReward);
