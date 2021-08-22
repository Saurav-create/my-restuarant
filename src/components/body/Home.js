import React, { Component } from 'react';
import Loading from './Loading';




class Home extends Component {









    render() {
        document.title = 'Home';
        return (
            <div>
                <h1>test</h1>
                <Loading />
            </div>
        );
    }
}

export default Home;
