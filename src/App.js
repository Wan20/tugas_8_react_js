import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Figure,
  Breadcrumb,
  Carousel,
  ListGroup,
  Jumbotron,
  Button,
  Form,
  Modal,
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    console.log("Before ", this.state.show);
    this.setState({ show: !this.state.show });
    console.log("Now ", this.state.show);
  }
  render() {
    // const { show, onChange } = this.props;
    return (
      <div>
        <Container style={{ maxWidth: "1200px" }}>
          <Row style={{ backgroundColor: "black" }}>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="primary">
                  Pilih Bahasa
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Indonesia</Dropdown.Item>
                  <Dropdown.Item href="/">Inggris</Dropdown.Item>
                  <Dropdown.Item href="/">Jepang</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={9}></Col>
            <Col>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="Profile"
                  src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                />
                <Figure.Caption>Alan Saputra</Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <br />
          <Row>
            <Col></Col>
            <Col>
              <Modal show={this.state.show} onHide={this.onChange} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Anda Berhasil Login</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary">Save Username & Password</Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Berita
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={9}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                    alt="Bola 1"
                  />
                  <Carousel.Caption>
                    <h3>Neymar buktikan performa selalu stabil</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                    alt="Bola 2"
                  />
                  <Carousel.Caption>
                    <h3>Laga Persahabatan indonesia</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                    alt="Bola 3"
                  />
                  <Carousel.Caption>
                    <h3>Inggris mau jadi Team Terbaik Dunia</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col></Col>
          </Row>

          <br />
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
                <ListGroup.Item>Divisi Primera</ListGroup.Item>
                <ListGroup.Item>Seri A</ListGroup.Item>
                <ListGroup.Item>Ligue 1</ListGroup.Item>
                <ListGroup.Item>Bundesliga</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={6}>
              <Jumbotron>
                <h3>DIVISI PRIMERA</h3>
                <p>Main Untuk Catalunya, Gerard Piques Minta Dihormati</p>
                <Button variant="primary">Read More</Button>
              </Jumbotron>
            </Col>
            <Col>
              <Form>
                <center>
                  <Figure>
                    <Figure.Image
                      width={50}
                      height={50}
                      alt="Profile"
                      src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                    />
                    <Figure.Caption>Silahkan Login</Figure.Caption>
                  </Figure>
                </center>
                <Form.Group>
                  <Form.Control type="email" placeholder="Masukkan Email" />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan Password"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Check type="checkbox" label="Term & Condition" />
                </Form.Group>

                <Button variant="primary" onClick={this.onChange}>
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
