import { useEffect, useState } from 'react';

type SearchPropsType = {
  value: string;
  onSubmit: (fixedValue: string) => void;
};

export const Search = (props: SearchPropsType) => {
  const [tempSearch, setTempSearch] = useState<string>("it-kamasutra");

  useEffect(() => {
    setTempSearch(props.value);
  }, [props.value]);

  return (
    <div>
      <input
        value={tempSearch}
        placeholder="search"
        onChange={(e) => setTempSearch(e.target.value)}
      />
      <button onClick={() => props.onSubmit(tempSearch)}>
        Search
      </button>
    </div>
  );
};
