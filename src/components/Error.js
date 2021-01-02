import { Container, Button } from "../styles/styles";

export const Error = ({reload}) => (
  <Container>
    <h1>Your Search Appears not to be Valid</h1>
    <Button onClick={() => reload()}>Try Again</Button>
  </Container>
);
