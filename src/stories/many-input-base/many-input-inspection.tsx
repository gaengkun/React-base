import React, { useState, useCallback } from "react";

// 2 Way Inspection Guide

function ManyInputInspectionComponent() {
  const [inputs, setInputs] = useState({
    id: "",
    email: "",
    phone: "",
  });

  const onChange = useCallback(
    (e: any) => {
      e.persist();

      console.log(e.target.dataset);

      const { name, value } = e.target;
      console.log(e.target);
      if (inspection(name, value)) {
        setInputs({
          ...inputs,
          [name]: value,
        });
      }
    },
    [inputs]
  );

  const inspection = useCallback((name, value) => {
    if (name === "email") {
      if (value.length < 10) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="id">id</label>
        <input
          type="text"
          name="id"
          value={inputs.id}
          onChange={(e) => {
            if (e.target.value.length < 10) {
              onChange(e);
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          datatype="number"
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

export default ManyInputInspectionComponent;
