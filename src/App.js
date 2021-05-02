import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ProfileInfo from './components/header/ProfileInfo';
import Search from './components/header/Search';
import Navigation from './components/navigation/Navigation';
import ContentBlock1 from './components/conent/ContentBlock';
import ContentBlock2 from './components/conent/ContentBlock2';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <Container fluid={true}>
        <Row className="top">
          <Col className="logo">
            <p className="font-weight-light mb-0">@just</p>
            <p className="font-weight-normal mb-0">Free</p>
          </Col>
          <Col className="top-bar" xs={10}>
            <Search />
            <ProfileInfo />
          </Col>
        </Row>
        <Row>
          <Col className="menu pl-0 pr-0">
            <Navigation />
          </Col>
          <Col className="content" xs={10}>
            <Row>
              <ContentBlock1 />
              <ContentBlock2 />
            </Row>
            <Row>
            </Row>
            <Row></Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;