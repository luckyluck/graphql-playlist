import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
    displayAuthors() {
        const { loading, authors } = this.props.data;

        if (loading) {
            return <option disabled>Loading authors...</option>
        } else {
            return authors.map(author =>
                (<option key={author.id} value={author.id}>{author.name}</option>)
            );
        }
    }

    render() {
        return (
            <form id="add-book">
                <div className="field">
                    <label htmlFor="name">Book name:</label>
                    <input type="text" name="name" id="name"/>
                </div>

                <div className="field">
                    <label htmlFor="genre">Genre:</label>
                    <input type="text" name="genre" id="genre"/>
                </div>

                <div className="field">
                    <label htmlFor="author">Author</label>
                    <select name="author" id="author">
                        {this.displayAuthors()}
                    </select>
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);
