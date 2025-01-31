import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Filter from './Filter';

import Button from './Button';
import { useSearchParams } from 'react-router';

type FilterBoxProps = {
  disabled?: boolean;
  name: string;
  data: { name: string; value: string }[];
  availableFilters: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const StyledFilterBox = styled.div`
  border: 1px #000 solid;
  width: 22rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  height: min-content;

  ul {
    display: flex;
    flex-direction: column;
    height: 12rem;
    overflow: scroll;
  }
`;

function FilterBox({
  name,
  data,
  handleChange,
  disabled = false,
  availableFilters,
}: FilterBoxProps) {
  const [showWindow, setShowWindow] = useState<boolean>(false);
  const [curFilterLength, setCurFilterLength] = useState<number>(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const curLength = searchParams.get(name)?.split(',').length;
    if (curLength) setCurFilterLength(curLength);
  }, [searchParams, name]);

  useEffect(() => {
    if (disabled) setShowWindow(false);
  }, [disabled]);

  const handleClick = useCallback(() => {
    setShowWindow(prevState => !prevState);
  }, []);

  return (
    <StyledFilterBox>
      <Button
        $type="button-22rem-withoutBorder"
        onClick={handleClick}
        disabled={disabled}
      >
        {curFilterLength ? `Selected(${curFilterLength})` : `Select ${name}`}
      </Button>
      {showWindow && !disabled && (
        <ul>
          {data.map(({ name, value }: { name: string; value: string }) => (
            <Filter
              key={name}
              label={name}
              value={value || name}
              handleChange={handleChange}
              checked={availableFilters.includes(value)}
            />
          ))}
        </ul>
      )}
    </StyledFilterBox>
  );
}

export default FilterBox;
