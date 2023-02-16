import React from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react'

const BookCard = (book) =>{
const {title, author, price, image, addToCard, addedCount} = book;
    return (<Card>
            <div className="card-image">
                <Image src={image} />
            </div>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className="date">{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <div>
                    <Icon name="usd" />
                    {price}
                </div>
            </Card.Content>
            <Button onClick={addToCard.bind(this, book)}>
                Add to Card {addedCount > 0 && `(${addedCount})`}
            </Button>
        </Card>
);};

export default BookCard;