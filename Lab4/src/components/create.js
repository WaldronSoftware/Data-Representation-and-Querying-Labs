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
    }

    handleSubmit(event)
    {
        event.preventDefault();

        //Submit alerts
        alert('Name Submitted: ' + this.state.title);
        alert('Author Submitted: ' + this.state.author);
        alert('URL Submitted: ' + this.state.url);
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
                <br />
                <br />
                <Button type="submit" value="Submit" >Submit</Button>
            </form>
        );
    }
}