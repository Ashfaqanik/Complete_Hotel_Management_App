import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  /* background-color: var(--color-${(props) => props.type}-700); */
  color: var(--color-${(props) => props.type});
`;

export default Tag;
