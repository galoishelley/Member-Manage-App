import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterMembers, clearFilter } from '../../actions/memberAction.js';


const MemberFilter = ({ filterMembers, clearFilter, filtered }) => {

    const text = useRef('');

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            filterMembers(e.target.value);
        } else {
            clearFilter();
        }
    }


    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Members..." onChange={onChange} /><i className="material-icons grey-text">search</i>
        </form>
    )
}

MemberFilter.prototype = {
    filterMembers: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    filtered: state.member.filtered
});

export default connect(mapStateToProps, { filterMembers, clearFilter })(MemberFilter);
