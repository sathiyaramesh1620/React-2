import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Signup = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <div className="card">
          <div className="card-header text-center"> Signup </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder='UserName' />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder='Email' />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder='Password' />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder='Conformpassword' />
              </div>
              <button className='btn btn-success'>Submit </button>
            </form>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Signup