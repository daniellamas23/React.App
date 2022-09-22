import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <h1>Productos</h1>
            <h3 className="greeting">{greeting}</h3>
        </Container>
    );
}

export default ItemListContainer;