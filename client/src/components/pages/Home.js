import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/authActions.js';

const Home = ({ loadUser }) => {

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div className="grid-2">
            <h1>HOME</h1>
        </div>

    )
}

export default connect(null, { loadUser })(Home);
