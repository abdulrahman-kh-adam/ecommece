import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserEditAddressComp from "../../Components/User/UserEditAddressComp";

const UserEditAddress = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="4" md="2">
          <UserSideBar />
        </Col>
        <Col xs="8" md="10">
          <UserEditAddressComp />
        </Col>
      </Row>
    </Container>
  );
};

export default UserEditAddress;
