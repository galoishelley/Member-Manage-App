import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/authActions.js';
import About from '../pages/About.js';

const Home = ({ loadUser }) => {

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <About />
    )
}

export default connect(null, { loadUser })(Home);
