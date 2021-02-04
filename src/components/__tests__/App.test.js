import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('App', () => {
  it('renders a comment box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('CommentBox');
    // Cleanup. This is done in order to don't reduce the performance of our tests. This is done because otherwise the component would stay in memory after the test finishes.
    ReactDOM.unmountComponentAtNode(div);
  });
});
