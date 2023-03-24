
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import StarRating from "./StarRating";

function ProductCard(props) {
    const product = props.product
    const cart = useContext(CartContext)

    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <Card  style={{boxShadow:"5px 5px 25px #e3e6e6", border:"none"}}>
            <Card.Body>
                <div className="card-img-bg">
                <Card.Img variant="top" src={product.image} height="200px" width="70px" />
                </div>
                <Card.Title align="left" >{product.title}</Card.Title>
                <Col>
                <Row>
                    <div style={{display:"flex", gap:"50px", fontSize:"1.1em", fontWeight:"700"}}><StarRating /><span>NGN{product.price}</span></div>
                </Row> 
                </Col>
                <Card.Text>{product.info}</Card.Text>
                <Button className="card-btn" style={{width:"270px", backgroundColor:"#5F9EA0"}} onClick={() => cart.addOneToCart(product.id)}>Add to cart</Button>
            
            </Card.Body>
        </Card>
    )
}
export default ProductCard