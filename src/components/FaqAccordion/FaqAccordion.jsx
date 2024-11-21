import React from 'react'
import './FaqAccordion.css'
import  Accordion from 'react-bootstrap/Accordion'

const FaqAccordion = () => {
  return (
    <div className='faq-section'>
        <div className="container d-flex flex-column align-items-center">
            <h2 className='text-center text-capitalize mb-5'>Ko'p beriladigan savollar</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi modi numquam dignissimos amet delectus cupiditate, assumenda eos nobis quaerat?</p>
            <Accordion defaultActiveKey='' flush >
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        Birinchi savol?
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat magnam in voluptatum dolorum, nihil velit quasi, iste suscipit voluptas rem quis, fugit eveniet qui commodi aut. Voluptates, sunt commodi delectus sint labore a? Consequatur perferendis cumque molestiae enim tenetur!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                        Ikkinchi savol?
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat magnam in voluptatum dolorum, nihil velit quasi, iste suscipit voluptas rem quis, fugit eveniet qui commodi aut. Voluptates, sunt commodi delectus sint labore a? Consequatur perferendis cumque molestiae enim tenetur!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                        Uchinchi savol?
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat magnam in voluptatum dolorum, nihil velit quasi, iste suscipit voluptas rem quis, fugit eveniet qui commodi aut. Voluptates, sunt commodi delectus sint labore a? Consequatur perferendis cumque molestiae enim tenetur!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                        To'rtinchi savol?
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat magnam in voluptatum dolorum, nihil velit quasi, iste suscipit voluptas rem quis, fugit eveniet qui commodi aut. Voluptates, sunt commodi delectus sint labore a? Consequatur perferendis cumque molestiae enim tenetur!
                    </Accordion.Body>
                </Accordion.Item>  
            </Accordion>       
        </div>

    </div>
  )
}

export default FaqAccordion