import styled from "styled-components";

const Resume = styled.div`
  margin: auto;
  background-color: ${props => props.theme.color.lightGray.primary};
  border-radius: 10px;
  padding: 2em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Table = styled.div`
  margin: auto;
  padding: 1em 0em;
`;

export { Resume, Table };
