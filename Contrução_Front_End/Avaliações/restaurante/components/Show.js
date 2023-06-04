import React, { useState } from "react";


const Show = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return {
    show,
    handleClose,
    handleShow
  };
}

export default Show
