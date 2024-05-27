import React, { useState } from 'react';
import { Form, Row, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PriceStyles.css'
function PriceRangeWithSuggestions() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showMinSuggestions, setShowMinSuggestions] = useState(false);
  const [showMaxSuggestions, setShowMaxSuggestions] = useState(false);

  const minSuggestions = [10000, 20000, 50000, 100000];
  const maxSuggestions = [100000, 500000, '1cr', '1.5cr'];

  const handleSuggestionClick = (value, setPrice, setShowSuggestions) => {
    setPrice(value);
    setShowSuggestions(false);
  };

  return (
    <div>
      <Form>
        <Form.Group as={Row} controlId="priceRange">
          <Form.Label column sm="2" style={{paddingTop:'35px'}}>Price</Form.Label>
          <Col sm="5">
            <Row>
              <Col>
                <Form.Label style={{paddingLeft:'23px'}}>Min</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    onFocus={() => setShowMinSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowMinSuggestions(false), 100)}
                  />
                  {showMinSuggestions && (
                    <Dropdown.Menu show>
                      {minSuggestions.map((suggestion, index) => (
                        <Dropdown.Item
                          key={index}
                          onMouseDown={() => handleSuggestionClick(suggestion, setMinPrice, setShowMinSuggestions)}
                        >
                          {suggestion}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  )}
                </div>
              </Col>
              <Col>
                <Form.Label style={{paddingLeft:'23px'}}>Max</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    onFocus={() => setShowMaxSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowMaxSuggestions(false), 100)}
                  />
                  {showMaxSuggestions && (
                    <Dropdown.Menu show>
                      {maxSuggestions.map((suggestion, index) => (
                        <Dropdown.Item
                          key={index}
                          onMouseDown={() => handleSuggestionClick(suggestion, setMaxPrice, setShowMaxSuggestions)}
                        >
                          {suggestion}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default PriceRangeWithSuggestions;
