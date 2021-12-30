import styled from "styled-components";

const StyledComponents = () => {
  return (
    <main>
      <header>
        <h1>Styled Components tutorial</h1>
        <Custombtn>Submit</Custombtn>
      </header>
    </main>
  );
};

const Custombtn = styled.button`
  background-color: red;
  padding: .5rem 1rem;
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  border-radius: 10px;
  margin-left: 50%;
  margin-top: 10%;
`

export default StyledComponents;
