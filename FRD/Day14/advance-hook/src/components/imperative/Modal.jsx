import React, { useImperativeHandle, useRef } from "react";

function Modal(prop, ref) {
  const emailRef = useRef();
  const passwordRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      focusEmail: () => emailRef.current.focus(),
      focusPassword: () => passwordRef.current.focus(),
    }),
    []
  );
  return (
    <div>
      <h3>Modal</h3>
      <div>
        <input ref={emailRef} type="text" placeholder="email" />
        <input ref={passwordRef} type="text" placeholder="password" />
      </div>
    </div>
  );
}

export default React.forwardRef(Modal);
