var React = require('react');
import ReactDOM from 'react-dom'; 

var Comments = require('./views/comments');
var CommentForm = require('./views/comment-form');

var CommentActionCreator = require('./actions/comment-action-creators');

//Testing
/*
var AppDispatcher = new Dispatcher(); 
createNewItem: function( evt ) {

    AppDispatcher.dispatch({
        actionName: 'new-item',
        newItem: { name: 'Marco' } // example data
    });

}*/

var counter = 0;
function testClick()
{
	counter++;
	CommentActionCreator.createComment('aaaaa' + counter)
}
//End Testing

var App = React.createClass({ 
 
	render: function() {
	return (
	  <div>
		<Comments />
		<CommentForm /> 
		<button onClick={() => testClick()}>New Item</button>  
	  </div>
	);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
