import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./Redux/slices/filterSlice";

export const Filter = (): ReactElement => {
	const filter = useSelector(
		state => state.productFilter.filter
	);

	const dispatch = useDispatch(); 

  return(
    <div>
      <input
        onChange={(e) =>
					dispatch(setFilter(e.target.value))
				}
        value={filter}
        placeholder="Filter by"
      >
      </input>
    </div>
  );
};
