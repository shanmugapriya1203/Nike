import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import QRCode from 'qrcode.react';

const QrGenerator = () => {
  const [data, setData] = useState('Example');
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [imageFormat, setImageFormat] = useState('png'); // Default format
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

  const handleGenerateQRCode = () => {
    // Generate the QR code URL using qr.js
    const qrCode = new QRCode({
      content: data,
      width: width,
      height: height,
      color: {
        dark: color,
        light: bgColor,
      },
    });

    qrCode.toDataURL(`image/${imageFormat}`, (err, dataUrl) => {
      if (err) {
        console.error(err);
      } else {
        setQrCodeDataUrl(dataUrl);
      }
    });
  };

  const handleDownloadQRCode = () => {
    // Trigger download of the QR code image
    const a = document.createElement('a');
    a.href = qrCodeDataUrl;
    a.download = `qrcode.${imageFormat}`;
    a.click();
  };

  useEffect(() => {
    // This useEffect will generate the QR code URL initially when the component mounts
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
            <Col>
              <Form.Group>
                <Form.Label>Width</Form.Label>
                <Form.Control
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
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
            className="my-2 mx-4 mb-3"
            onClick={handleGenerateQRCode}
          >
            Generate
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="my-2 mx-4 mb-3"
            onClick={handleDownloadQRCode}
          >
            Download
          </Button>
        </Form>
        <div>
          {qrCodeDataUrl && (
            <img
              src={qrCodeDataUrl}
              alt="QR Code"
              style={{ width: width, height: height }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QrGenerator;
