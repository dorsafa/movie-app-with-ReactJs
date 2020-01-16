import React from 'react'
import { Card } from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './MovieCard.css'

export default function MovieCard(props) {
    return (

        <Card style={{ width: '18rem' }} className='movieCard' >
            <Card.Img variant="top" src={props.list.movieImg} />
            <Card.Body>
                <Rater total={5} rating={props.list.rating} interactive={false} />
                <Card.Title>{props.list.movieName}</Card.Title>
                <Card.Subtitle>{props.list.movieYear}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}
