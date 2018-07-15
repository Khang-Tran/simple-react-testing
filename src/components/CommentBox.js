import React, {Component} from 'react';

class CommentBox extends Component {
    state = {comment: ''};

    onChange = e => {
        this.setState({comment: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        this.setState({comment: ''});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={this.onChange} value={this.state.comment}/>
                <div>
                    <button>Submit a comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;