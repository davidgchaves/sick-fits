import React from "react";
import App, { Container } from "next/app";

import Page from "../components/Page";

class Monkey extends App {
  render() {
    const Component = this.props.Component;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default Monkey;
