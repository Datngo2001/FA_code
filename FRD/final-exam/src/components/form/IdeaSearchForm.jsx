import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function IdeaSearchForm({ handleSubmit }) {
  const [inputs, setInputs] = useState({
    term: ''
  });
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputs.term == '') {
      setError('Please input key word');
      return;
    }
    handleSubmit(inputs.term);
    setError('');
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          name="term"
          value={inputs.term}
          onChange={handleChange}
          placeholder="Search ideas..."
          z
        />
        <Button type="submit" variant="outline-secondary">
          Search
        </Button>
      </InputGroup>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Form>
  );
}

export default IdeaSearchForm;
