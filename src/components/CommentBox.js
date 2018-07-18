import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchComments, saveComment} from '../actions';

class CommentBox extends Component {
    state = {comment: ''};

    onChange = e => {
        this.setState({comment: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h4>Add a comment</h4>
                    <textarea onChange={this.onChange} value={this.state.comment}/>
                    <div>
                        <button>Submit a comment</button>
                    </div>
                </form>
                <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        );
    }
}

export default connect(null, {saveComment, fetchComments})(CommentBox);