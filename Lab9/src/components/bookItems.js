import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


export class BookItems extends React.Component
{
    constructor()
    {
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    DeleteBook(e)
    {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/book/' + this.props.book._id).then((err, data) =>
        {
            this.props.ReloadData(data);
        })
    }

    render()
    {
        return (
            <Card>
                <Card.Header>{this.props.book.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote">
                        <img src={this.props.book.cover}></img>
                        <footer >
                            {this.props.book.author}
                        </footer>
                    </blockquote>
                    <Link to={'/edit/' + this.props.book._id} className="btn btn-primary">Edit</Link> <br />
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card.Body>
            </Card>
        );
    }
}

