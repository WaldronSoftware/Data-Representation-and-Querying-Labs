import React from "react";
import { Books } from './books';
import axios from "axios";


export class Read extends React.Component{
    state = {
        books: [
            
        ]
    }

    componentDidMount()
    {
        // Request for async
        axios.get("https://jsonblob.com/api/jsonblob/1027219693823606784").then(
            (resp =>
            {
                // State update
                console.log(resp.data);
                this.setState({ books: resp.data });
            })
        ).catch((err) =>
        {
            console.log(err)
        })
    }


    render()
    {
        return (
            <div >
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}

