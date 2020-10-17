import React, { useState, useCallback } from "react";

function ManyInputBaseComponent() {
  const [inputs, setInputs] = useState({
    id: "",
    email: "",
    phone: "",
  });

  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  return (
    <div>
      <div>
        <label htmlFor="id">id</label>
        <input
          type="text"
          name="id"
          value={inputs.id}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          name="phone"
          value={inputs.phone}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>
      <button
        onClick={() => {
          console.log(inputs);
        }}
      >
        Inputs State Check
      </button>
    </div>
  );
}

export default ManyInputBaseComponent;
