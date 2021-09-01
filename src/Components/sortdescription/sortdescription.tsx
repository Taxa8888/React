import React, { ReactElement } from 'react';
import './sortdescription.style.scss';
import { useSelector } from 'react-redux';

export const SortDescription = (): ReactElement => {
    const { genres } = useSelector((store) => store.chosenMovie);
    return (
        <div className="sortDescriprionContainer">
            <div className="sortDescriprionBy">{`Films by ${genres.join(', ')} genres`}</div>
        </div>
    );
};
