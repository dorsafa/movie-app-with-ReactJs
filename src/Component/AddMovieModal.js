import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
// import './AddMovieModal.css'

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [movieList, setMovieList] = useState([])
  
  const add = () => {
    props.addCard(
      setMovieList([...movieList])
     );
     handleClose()
  } 
 
  

  return (
    <>

      <Button variant="light" onClick={handleShow} className='buttonAdd'>
        <img className='plusIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png' />
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='modalForm'>
            Movie name : <input type='text' placeholder='Movie name' />
            Rating : <Rater total={5} rating={3} />
            Year : <input type='text' placeholder='2020' />
            Description : <textarea placeholder='Descritpion' />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>add(e)} >
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Example