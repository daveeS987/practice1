// import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import './form.scss';
import useForm from '../form-hook/form-hook.js';


function TodoForm () {

  const [handleSubmit, handleChange] = useForm(doWorkHere)

  function doWorkHere(formItem){

    
    console.log('formItem', formItem);
  }

  return(

    <Form onSubmit={handleSubmit}>
      <h4>Search By Location</h4>
      
      <Form.Group  controlId="formBasicTask">
        <Form.Label>City: </Form.Label>
        <Form.Control
          onChange={handleChange}
          name='city' 
          type="text" 
          placeholder="Enter a Location"
          required
        />
      </Form.Group>


      
      <Button variant="primary" type="submit">
        Search
      </Button>

    </Form>

  )

}

export default TodoForm;