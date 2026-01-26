import React, { useState } from 'react';
type SearchPropsType = {
   value: string;
   onSubmit: (fixedValue: string) => void;
};
 const [tempSearch, setTempSearch] = useState<string>("it-kamasutra");
export const Search = (props: SearchPropsType) => {
    return(
        <div>
        <input
          value={tempSearch}
          placeholder="searh"
          onChange={(e) => setTempSearch(e.target.value)}
        />
        <button onClick={() => props.onSubmit(tempSearch)}>Search</button>
      </div>
    );
    
};