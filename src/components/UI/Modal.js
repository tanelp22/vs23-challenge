import React from "react";

const Modal = React.forwardRef((props, ref) => {
  return (
    <dialog className="modal" ref={ref}>
      <p>test</p>
      <button onClick={() => ref.current?.close()}>Close</button>
    </dialog>
  );
});

export default Modal;
