import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Program.css";

function Myprograms() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/asia")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter((item) =>
    item.name.common.toLowerCase().includes(searchTerm.toLowerCase()) /////lowercase เปลี่ยนเป็นตัวพิมพ์เล็กเพื้อหาข้อมูลจะได้ไม่ต้องคิดว่าจะค้นหาเเบบพิมพ์เล็กหรือพิมพ์ใหญ่ include เพื่อเช็คว่ามีคำค้นหานั้นจริงๆหรือไม่โดยกลับไปอ้างอิง statesearchterm 
  );

  return (
    <>
      <Container className="middle-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="COUNTRY..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Row>
          {filteredCountries.map((item) => (
            <Col key={item.id} lg={3} sm={12} className="mb-4">
              <Card style={{ width: "18rem", objectFit: "cover" }}>
                <Card.Img
                  variant="top"
                  src={item.flags.png}
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title>{item.name.common}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>region: {item.region}</ListGroup.Item>
                  <ListGroup.Item>
                    currencies:
                    {Object.keys(item.currencies).map((currencyCode) => (
                      <span key={currencyCode}>
                        {item.currencies[currencyCode].name}
                      </span>
                    ))}
                  </ListGroup.Item>
                  <ListGroup.Item>timezone: {item.timezones}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Myprograms;
