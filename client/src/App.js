import React, { Component } from 'react';

// Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

class App extends Component {
    render() {
        return (
            <div id="main">
                <h1>Reading list</h1>
                <BookList/>
                <AddBook/>
            </div>
        );
    }
}

export default App;
