import React, { useState } from "react"; // Import React ,useState hook
import { ResizableBox } from "react-resizable"; // Import ResizableBox 
import Draggable from "react-draggable"; // Import Draggable 
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col components from react-bootstrap
import img9 from "./Img/Img9.jpg"; // Import image file
import img10 from "./Img/Img10.jpg"; // Import image file
import img7 from "./Img/Img7.jpg"; // Import image file

const App = () => {

  // state to manage positions of draggable components
  const [componentPositions, setComponentPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  // Function to handle drag event of draggable 
  const handleDrag = (index, e, ui) => {
    const newPositions = [...componentPositions];
    newPositions[index] = { x: ui.x, y: ui.y };
    setComponentPositions(newPositions);
  };

  // Function to handle resize event of resizable 
  const handleResize = (index, e, { size }) => {
    const newPositions = [...componentPositions];
    newPositions[index] = { x: newPositions[index].x, y: newPositions[index].y, width: size.width, height: size.height };
    setComponentPositions(newPositions);
  };

  // Render Component
  return (
    <Container fluid>
      {/* First Row */}
      <Row style={{ height: "-990px" }}>
        {/* First Column */}
        <Col md={12} lg={5} style={{ backgroundImage: `url(${img9})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "300px" }}>
          {/* Draggable and Resizable Component 1 */}
          <Draggable
            position={componentPositions[0]}
            onStop={(e, data) => handleDrag(0, e, data)}
          >
            <ResizableBox
              width={300}
              // height={200}
              onResize={(e, data) => handleResize(0, e, data)}
            >
              <div className="component" style={{ backgroundColor: "lightblue" }}>
                <h2>Window 1</h2>
                <h3>Component 1</h3>
                <ul>
                <li>Trading Exchange Market BuySell</li>
                <li>Day Trading, Brokers & for all Fintech </li>
                <li>forex & stock Broker, fintech forex & stock</li>
          </ul>
              </div>
            </ResizableBox>
          </Draggable>
        </Col>

        {/* Second Column */}
        <Col md={12} lg={7} style={{ backgroundImage: `url(${img7})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "300px" }}>

          {/* Draggable and Resizable Component  */}
          <Draggable
            position={componentPositions[1]}
            onStop={(e, data) => handleDrag(1, e, data)}
          >
            <ResizableBox
              width={310}
              // height={200}
              onResize={(e, data) => handleResize(1, e, data)}
            >
              <div className="component" style={{ backgroundColor: "lightgreen" }}>
                <h2>Window 2</h2>
                <h3>Component 2</h3>
                <ul>
                <li>Annual Report :An annual report is a yearly report that every company prepares to impress the shareholders of their company.</li>
          </ul>
              </div>
            </ResizableBox>
          </Draggable>
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        {/* Third Column */}
        <Col md={12} style={{ backgroundImage: `url(${img10})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "300px" }}>

          {/* Draggable and Resizable Component  */}
          <Draggable
            position={componentPositions[2]}
            onStop={(e, data) => handleDrag(2, e, data)}
          >
            <ResizableBox
              width={300}
              // height={200}
              onResize={(e, data) => handleResize(2, e, data)}
              style={{marginTop:"30px"}}
            >
              <div className="component" style={{ backgroundColor: "lightcoral" }}>
                <h2 >Window 3</h2>
                <h3>Component 3</h3>

                <ul>
                <li>Averaging Down :Averaging down means the investor buys more stock when the price of a particular stock goes down. This decreases the average purchase price of your specific stock.</li>
          </ul>
              </div>
            </ResizableBox>
          </Draggable>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
