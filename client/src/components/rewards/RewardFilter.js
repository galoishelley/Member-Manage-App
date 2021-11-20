import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterRewards, clearFilter } from '../../actions/rewardAction.js';


const RewardFilter = ({ filterRewards, clearFilter, filtered }) => {

    const text = useRef('');

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            filterRewards(e.target.value);
        } else {
            clearFilter();
        }
    }


    return (
        <form>
            <input ref={text} type="text" placeholder="Filter rewards..." onChange={onChange} /><i className="material-icons grey-text">search</i>
        </form>
    )
}

RewardFilter.prototype = {
    filterRewards: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    filtered: state.reward.filtered
});

export default connect(mapStateToProps, { filterRewards, clearFilter })(RewardFilter);
