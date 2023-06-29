import React from "react";
import { Container, Text } from "./styles";
import { Props } from "./types";

export const Tag = ({ className }: Props): JSX.Element => (
  <Container className={className}>
    <Text>{"Meeting room"}</Text>
  </Container>
);
