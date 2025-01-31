import { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';

import { useAppState } from '../../contexts/appContext/AppContext';
import { useFilters } from '../../contexts/filtersContext/FiltersContext';
import FilterBox from '../../components/FilterBox';

const FiltersBoxStyled = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function FiltersBox() {
  const { departments, statuses, countries } = useAppState();
  const {
    departmentFilters,
    statusFilters,
    countryFilters,
    toggleFilterValue,
    deleteFilterValues,
    allowAll,
    toggleAllowAllFilters,
  } = useFilters();

  useEffect(() => {
    if (departmentFilters.length === 0) return;

    toggleAllowAllFilters(departmentFilters.length >= 3);
  }, [departmentFilters, toggleAllowAllFilters]);

  useEffect(() => {
    if (
      departmentFilters.length < 3 &&
      (statusFilters.length || countryFilters.length)
    ) {
      deleteFilterValues('country');
      deleteFilterValues('status');
    }
  }, [departmentFilters, deleteFilterValues, statusFilters, countryFilters]);

  function handleChangeFilter(name: string, e: ChangeEvent<HTMLInputElement>) {
    toggleFilterValue(name, e.target.value);
  }

  return (
    <FiltersBoxStyled>
      <FilterBox
        data={departments}
        name="department"
        handleChange={e => handleChangeFilter('department', e)}
        availableFilters={departmentFilters}
      />
      <FilterBox
        disabled={!allowAll}
        data={countries}
        name="country"
        handleChange={e => handleChangeFilter('country', e)}
        availableFilters={countryFilters}
      />
      <FilterBox
        disabled={!allowAll}
        data={statuses}
        name="status"
        handleChange={e => handleChangeFilter('status', e)}
        availableFilters={statusFilters}
      />
    </FiltersBoxStyled>
  );
}

export default FiltersBox;
