import React, { ReactElement } from "react";

export const Filter = ({ filter, setFilter }): ReactElement => {
    return(
        <div>
            <input
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                placeholder="Filter by"
            >
            </input>
        </div>
    );
};
