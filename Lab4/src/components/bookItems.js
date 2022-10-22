import React from "react";
import { Card } from 'react-bootstrap';

export class BookItems extends React.Component{
    render()
    {
        return (
            <div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.book.thumbnailUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>by <b>{this.props.book.authors[0]}</b></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

