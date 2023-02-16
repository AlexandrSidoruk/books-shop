import React, {useEffect} from "react";
import {Container, Card} from 'semantic-ui-react'
import axios from 'axios';
import BookCard from "../containers/BookCard";
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';


function App({setBooks, books, isLoading}) {
   useEffect(()=>{
        axios.get('/books.json').then(({data}) => {
            setBooks(data.books);
        })
        }, [])

    return (

        <Container>
            <Menu/>
            <Filter/>
            <Card.Group itemsPerRow={4}>
                {!isLoading ? "Loading..." : books && books.map((book, i) => <BookCard key={i} {...book} />)}
            </Card.Group>
        </Container>
    );

}

export default App;
