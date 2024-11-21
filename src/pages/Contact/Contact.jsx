import React from 'react'
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  Button  from 'react-bootstrap/Button';
import LondonImg from '../../utils/images/London-location.jpg';


const Contact = () => {
  return (
    <div className='contact-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Aloqaga chiqing </h1>
          <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque consequuntur praesentium laborum minus nostrum? Error perspiciatis dolorum reiciendis totam architecto. Blanditiis veniam earum iure temporibus. Eligendi et distinctio quidem, excepturi ipsam commodi doloribus esse rem.</p>
        </div>
      </header>
      <div className="container my-5 d-flex justify-content-center">
        <Form id='contact-form'>
          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>Ismingiz</Form.Label>
              <Form.Control plaseholder='Ismingiz' />
            </Col>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>Familiyangiz</Form.Label>
              <Form.Control plaseholder='Familiyangiz' />
            </Col>
          </Row>
          
          <Form.Group className='mb-3'>
            <Form.Label>Manzilingiz</Form.Label>
            <Form.Control  placeholder='Manzilingiz' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Telefon nomer</Form.Label>
            <Form.Control type='number'  placeholder='+998-XX-XXX-XX-XX' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Xabar qoldiring</Form.Label>
            <Form.Control as='textarea'  rows={3} />
          </Form.Group>

          <Button variant='danger btn-lg ' type='submit'>
            Jo'natish
          </Button>          
        </Form>
      </div>
      <div className='bg-dark text-light p-5'>
          <div className='container'>
            <h2 className='text-center mb-5'>Bizning Manzilimiz</h2>
            <div className='row g-4'>
              <div className='col-lg-4 d-flex flex-column align-items-center'>
              <a href="https://www.google.com/maps/place/Bulungur+Akademiyasi/@39.7010736,67.2266155,17594m/data=!3m1!1e3!4m6!3m5!1s0x3f4d2b764cc5b60d:0x7757ba11e4cdf01a!8m2!3d39.7009706!4d67.3090176!16s%2Fg%2F11vj9zlslh?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"><img src={LondonImg} className='img-fluid' alt="" /></a>
                  <h3 className='mt-1'>Bizning Manzil</h3>
              </div>
              <div className='col-lg-4 d-flex flex-column align-items-center'>
                   <a href="https://www.google.com/maps/place/Bulungur+Akademiyasi/@39.7010736,67.2266155,17594m/data=!3m1!1e3!4m6!3m5!1s0x3f4d2b764cc5b60d:0x7757ba11e4cdf01a!8m2!3d39.7009706!4d67.3090176!16s%2Fg%2F11vj9zlslh?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"><img src={LondonImg} className='img-fluid' alt="" /></a>                  
                  <h3 className='mt-1'>Bizning Manzil</h3>
              </div>
              <div className='col-lg-4 d-flex flex-column align-items-center'>
              <a href="https://www.google.com/maps/place/Bulungur+Akademiyasi/@39.7010736,67.2266155,17594m/data=!3m1!1e3!4m6!3m5!1s0x3f4d2b764cc5b60d:0x7757ba11e4cdf01a!8m2!3d39.7009706!4d67.3090176!16s%2Fg%2F11vj9zlslh?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"><img src={LondonImg} className='img-fluid' alt="" /></a>
                  <h3 className='mt-1'>Bizning Manzil</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact