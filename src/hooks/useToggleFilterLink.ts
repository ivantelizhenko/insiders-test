import { useSearchParams } from 'react-router';

export function useToggleFilterLink() {
  const [searchParams, setSeachParams] = useSearchParams();

  function toggleFilterLink(name: string, value: string) {
    let valueSetArray: string[] = Array.from(
      searchParams.get(name)?.split(',') || []
    );

    const comparisonIndex = valueSetArray.findIndex(el => el === value);

    if (valueSetArray.length === 0) valueSetArray = [value];
    else if (valueSetArray.length > 0 && comparisonIndex === -1)
      valueSetArray = [...valueSetArray, value];
    else if (valueSetArray.length > 0 && comparisonIndex > -1) {
      valueSetArray = valueSetArray.filter(el => el !== value);
    }

    searchParams.set(name, valueSetArray.join(','));
    if (!valueSetArray.at(0)) searchParams.delete(name);
    setSeachParams(searchParams);
  }

  return [toggleFilterLink];
}
