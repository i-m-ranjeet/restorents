import React from 'react';
import { Button, Card } from 'react-bootstrap';
// Button
function Home(props) {
    return <div className='restos'>{console.log(props.data)}
        {
            props.data.data.data.map((resto) => (
                <div className="restorent">
                    {/* <div className="restoname">{resto.name}</div>
                  <div>{resto.cuisines}</div>
                  <div>{resto.averagecostoftwo}</div> */}
                    <Card style={{ width: '18rem', border: "1px solid #222", margin: "20px", padding: "20px" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{resto.name}</Card.Title>
                            <Card.Text>
                                <div>cuisines : {resto.cuisines}</div>
                                <div>Average Cost Of Two : {resto.averagecostoftwo}</div>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))
        }
    </div>;
}

export default Home;
