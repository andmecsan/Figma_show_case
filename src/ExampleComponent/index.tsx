import { Container, SubText, Text, TagContainer } from "./styles";
import { Tag } from "./Tag";
import { Props } from "./types";

export const ExampleComponent = ({ className }: Props): JSX.Element => (
  <Container className={className}>
    <Text>{"Lectus enim"}</Text>
    <SubText>{"Barcelona HQ, 6th floor"}</SubText>
    <TagContainer>
      <Tag /> <SubText>{"Barcelona HQ, 6th floor"}</SubText>
    </TagContainer>
  </Container>
);
