import React from 'react';
import {mount} from 'enzyme';

import Root from '../../Root';
import CommentBox from '../CommentBox';

let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});

it('has a text area and 2 buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

// describe works like a block
describe('the textarea', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });
        wrapped.update();
    });
    it('has a textarea can be typed in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('empties textarea when the form is submitted', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});

afterEach(() => {
    wrapped.unmount();
});