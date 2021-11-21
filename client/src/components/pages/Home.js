import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/authActions.js';
import MbReward from '../mbreward/MbReward.js';

const Home = ({ loadUser }) => {

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <MbReward />
    )
}

export default connect(null, { loadUser })(Home);
