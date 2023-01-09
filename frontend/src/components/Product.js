import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to href={`/product/${product.slug}`}>
          <Card.Titile>{product.name}</Card.Titile>
          <Card.Titile>{product.author}</Card.Titile>
        </Link>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to card</Button>
      </Card.Body>
    </Card>
  );
}

export default Product();
