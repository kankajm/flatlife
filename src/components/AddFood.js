import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export default function AddFood() {
    const foodNameRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Přidání potraviny</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="name">
                            <Form.Label>Název suroviny</Form.Label>
                            <Form.Control type="text" ref={foodNameRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Je to kapalina?</Form.Label>
                            <Form.Control as="select" required>
                                <option>Ano</option>
                                <option>Ne</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group id="weightOrVolume">
                            <Form.Label>Váha nebo obsah potraviny (g nebo ml)</Form.Label>
                            <Form.Control type="number" defaultValue="100" required />
                        </Form.Group>
                        <Form.Group id="energy">
                            <Form.Label>Energetická hodnota (KJ)</Form.Label>
                            <Form.Control type="number" defaultValue="200" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Přidat</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              <Link to="/">Vrátit se</Link>
            </div>
        </>
    );
};

