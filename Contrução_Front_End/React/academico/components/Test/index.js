import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const index = ({ controlId, label, placeholder, register, Type }) => {
  return (
    <>
      {Type === '' ?
        <FloatingLabel controlId={controlId} label={label} className="mb-3">
          <Form.Control type="text" placeholder={placeholder} {...register} />
        </FloatingLabel>
        : (
        <FloatingLabel controlId={controlId} label={label} className="mb-3">
          <Form.Control type={Type} placeholder={placeholder} {...register} />
        </FloatingLabel>
      )}
    </>
  );
};

export default index;