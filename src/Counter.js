import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Counter() {

    const [count, setcount] = useState(0)

    const increment = () => {
        setcount(count + 1)

    }

    const decrement = () => {
        setcount(count - 1)

    }


    return (
        <div className='cntr'>
        <Container fluid className="vh-100  justify-content-center align-items-center p-4 m-3  mt-5">
        <Row>
            <Col className="text-center border border-dark p-4">
                <h1 className="mb-3 mt-3">Counter</h1>
                <h1>{count}</h1>
                <button variant="dark" className="w-50 p-3" onClick={increment}>+</button>
                <button variant="dark" className="w-50 p-3" onClick={decrement}>-</button>
            </Col>
        </Row>
    </Container>
    
    </div>
    )
}

export default Counter