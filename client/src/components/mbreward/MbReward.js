import React from 'react'
import RewardFilter from './MbRewardFilter.js';
import RewardItem from './MbRewardItem.js';
import { connect } from 'react-redux';

const MbReward = ({ reward: { rewards, loading, filtered } }) => {

    console.log(rewards);
    return (
        <div className="content">
            <RewardFilter />

            <table className="striped highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody>

                    {!loading && rewards !== null &&
                        filtered !== null
                        ?
                        filtered.map(reward => (
                            <RewardItem reward={reward} key={reward._id} />
                        ))

                        : rewards.map(reward => (
                            <RewardItem reward={reward} key={reward._id} />
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
    reward: state.reward
});

export default connect(mapStateToProps, null)(MbReward);
