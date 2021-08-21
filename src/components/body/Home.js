import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log(state);
    return {
        sample: state.sample
    }
}


class Home extends Component {


    componentDidMount() {
        console.log("Home props", this.props);

        this.props.dispatch({
            type: "TEST",
            str: "Bohubrihi"
        })
    }

    componentDidUpdate() {
        console.log("Home props Updated : ", this.props.sample);
    }







    render() {
        document.title = 'Home';
        return (
            <div>
                <h1>test</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);
