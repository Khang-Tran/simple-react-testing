import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeAuth} from '../actions';

import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends Component {
    renderButton = () => {
        if (this.props.auth)
            return <button onClick={() => this.props.changeAuth(false)}>Sign out</button>
        else
            return <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
    };
    renderHeader = () => {
        return <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/post'>Post a comment</Link>
            </li>
            <li>{this.renderButton()}</li>
        </ul>
    };

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route exact path='/post' component={CommentBox}/>
                <Route exact path='/' component={CommentList}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {changeAuth})(App);