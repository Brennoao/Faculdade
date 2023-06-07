import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

const index = (props) => {
  const { register } = useForm()
  return (
    <>
      {props.Type === null ? (
        <FloatingLabel controlId={props.controlId} label={props.label} className="mb-3">
          <Form.Control type="text" placeholder={props.placeholder} {...register(props.register)} />
        </FloatingLabel>
      ) : (
        <FloatingLabel controlId={props.controlId} label={props.label} className="mb-3">
          <Form.Control type={props.Type} placeholder={props.placeholder} {...register(props.register)} />
        </FloatingLabel>
      )}
    </>
  );
};

export default index;