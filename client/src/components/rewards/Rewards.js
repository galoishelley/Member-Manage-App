import React, { useEffect } from 'react'
import RewardFilter from './RewardFilter.js';
import RewardItem from './RewardItem.js';
import { connect } from 'react-redux';
import { getRewards } from '../../actions/rewardAction.js';

const Rewards = ({ reward: { rewards, loading, filtered }, getRewards }) => {

    useEffect(() => {
        getRewards();
    }, [])

    return (
        <div className="content">
            <h1>Rewards</h1>
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
                <a href="#add-reward-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
                    <i className="large material-icons">add</i>
                </a>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    reward: state.reward
});

export default connect(mapStateToProps, { getRewards })(Rewards);
