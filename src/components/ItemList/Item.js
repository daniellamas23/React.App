import { useState } from "react";
import { Card, Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (<>

        {product &&

        
            (<Container style={{ display: 'grid' }}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textTransform: 'uppercase' }}>{product.tipo}</Card.Title>
                        <Card.Text>
                            {product.char}
                        </Card.Text>
                        <Card.Text>
                            {product.div}  {product.precio}
                        </Card.Text>
                        <Link to={`/item/${product.id}`}>
                            <Button variant="primary">
                                Ver detalle
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>)
        }
    </>);

}


export default Item