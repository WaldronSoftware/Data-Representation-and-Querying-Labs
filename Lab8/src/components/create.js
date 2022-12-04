import axios from 'axios';
import React from "react";
import { Button } from "react-bootstrap";

export class Create extends React.Component
{
    constructor(props)
    {
        super(props);

        //Default state
        this.state = { title: '', author: '', url: '' };

        //Bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
        this.changeYear = this.changeYear.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();

        //Post
        axios.post("http://localhost:4000/api/books/", this.state)
    }

    changeTitle(event)
    {
        //State update after submitting book name
        this.setState({ title: event.target.value })
    }

    changeAuthor(event)
    {
        //State update after submitting author
        this.setState({ author: event.target.value })
    }

    changeUrl(event)
    {
        //State update after submitting url
        this.setState({ url: event.target.value })
    }

    changeYear(event)
    {
        // State update after submitting year
        this.setState({ year: event.target.value })
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Book Title:</p>
                <input type="text" value={this.state.title} onChange={this.changeTitle} />

                <p>Author:</p>
                <input type="text" value={this.state.author} onChange={this.changeAuthor} />

                <p>Book Page Url:</p>
                <input type="text" value={this.state.url} onChange={this.changeUrl} />

                <p>Year:</p>
                <input type="text" value={this.state.year} onChange={this.changeYear} />
                <br />
                <br />
                <Button type="submit" value="Submit" >Submit</Button>
            </form>
        );
    }
}