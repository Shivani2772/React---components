import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {

    return (
        <div class Name="ui container comments" >
            <CommentDetail author="Jane" timeAgo="Today at 4:45PM" commentContent="This a  good post" avatar={faker.image.avatar()}/>
            <CommentDetail author="Sam" timeAgo="Today at 2:00PM" commentContent="I dont like this so much" avatar={faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Yesterday at 5:00PM" commentContent="SUperb blog!" avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
