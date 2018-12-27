import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

class AddBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    displayAuthors() {
        const { loading, authors } = this.props.getAuthorsQuery;

        if (loading) {
            return <option disabled>Loading authors...</option>
        } else {
            return authors.map(author =>
                (<option key={author.id} value={author.id}>{author.name}</option>)
            );
        }
    }

    updateData(field, event) {
        this.setState({ [field]: event.target.value });
    }

    submitForm(event) {
        event.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={event => this.updateData('name', event)}/>
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={event => this.updateData('genre', event)}/>
                </div>

                <div className="field">
                    <label>Author</label>
                    <select onChange={event => this.updateData('authorId', event)}>
                        <option>Select an author</option>
                        {this.displayAuthors()}
                    </select>
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
