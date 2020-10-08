import React, { Component } from 'react';
import { Badge, Button, Container, Row, Col, Alert, Breadcrumb, Card,
  CardGroup, Media } from 'react-bootstrap';

class App extends Component {
  render(){
    return(
      <>
        <Container fluid>
          <Row>
            <Col>
              <Alert variant="primary">Website React bootstrap</Alert>
            </Col>
            <Col></Col>
            <Col>
              <Media>
                <Button variant="primary">
                  Notification <Badge variant="light">9</Badge>
                </Button>
                <Button variant="primary">
                  Message <Badge variant="light">19</Badge>
                </Button>
                  <img src="../img/icon.png" height="40" width="40" alt="icon"/>
                  <Media.Body><h4>Andreas</h4></Media.Body>
                </Media>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <br />
          <Row>
            <Col></Col>
            <Col xl={10}>
              <CardGroup>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/diego-godin.jpg" />
                  <Card.Body>
                    <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
                    <Card.Text>
                      Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu
                      negaranya melibas Thailand di final Piala Tiongkok. Diego Godin boleh berbangga
                      setelah resmi menjadi.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/neymar.jpg" />
                  <Card.Body>
                    <Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</Card.Title>
                    <Card.Text>
                      Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid.
                      Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan Kontrak
                      bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/england.jpg" />
                  <Card.Body>
                    <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
                    <Card.Text>
                      Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley
                      sangat optimis. Ross Barkley merasa Inggris sudah berada di jalur yang benar
                      untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul
                      sekarang ini.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/sani-rizki-fauzi.jpg" />
                  <Card.Body>
                    <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23
                      Tetap Bagus</Card.Title>
                    <Card.Text>
                      Gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan
                      kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua
                      tim akan bentrok pada laga pemungkas grup K .
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
