import styled from 'styled-components';

type Filter = { label: string; value: string };

const StyledFilter = styled.li`
  display: flex;
  padding: 0.8rem 1.2rem;
  gap: 0.8rem;

  label {
    font-size: 1.4rem;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
  }
`;

function Filter({ label, value }: Filter) {
  return (
    <StyledFilter>
      <input type="checkbox" value={value} />
      <span className="checkmark"></span>
      <label>{label}</label>
    </StyledFilter>
  );
}

export default Filter;
