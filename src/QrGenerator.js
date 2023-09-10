import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import QRCode from "qrcode.react";

const QrGenerator = () => {
  const [data, setData] = useState("Example");
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [imageFormat, setImageFormat] = useState("png");

  const [imageUrl, setImageUrl] = useState("");

  const handleGenerateQRCode = () => {
    const qrOptions = {
      width: width,
      height: height,
      color: {
        dark: color,
        light: bgColor,
      },
      type: imageFormat,
    };

    QRCode.toDataURL(data, qrOptions, (err, url) => {
      if (err) {
        console.error(err);
      } else {
        setImageUrl(url);
      }
    });
  };

  const handleDownloadQRCode = () => {
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `qrcode.${imageFormat}`;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    handleGenerateQRCode();
  }, [imageFormat]);

  return (
    <div>
      <h1 className="text-center">QR Code Generator</h1>
      <div className="container">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Your Data</Form.Label>
            <Form.Control
              type="text"
              placeholder="Examples"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Form.Group>
                <Form.Label>Width</Form.Label>
                <Form.Control
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Group>
                <Form.Label>Height</Form.Label>
                <Form.Control
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="qrColor">
            <Form.Label>QR Color</Form.Label>
            <Form.Control
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="bgColor">
            <Form.Label>Background Color</Form.Label>
            <Form.Control
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="imageFormat">
            <Form.Label>Select Image Format</Form.Label>
            <Form.Control
              as="select"
              value={imageFormat}
              onChange={(e) => setImageFormat(e.target.value)}
            >
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="svg">SVG</option>
            </Form.Control>
          </Form.Group>
          <Button
            variant="primary"
            size="sm"
            className="my-2 mx-4 mb-3 mt-3"
            onClick={handleGenerateQRCode}
          >
            Generate
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="my-2 mx-4 mb-3 mt-3"
            onClick={handleDownloadQRCode}
          >
            Download
          </Button>
        </Form>
        <div className="image">
          {imageUrl && (
            <QRCode
              value={data}
              size={width}
              fgColor={color}
              bgColor={bgColor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QrGenerator;
