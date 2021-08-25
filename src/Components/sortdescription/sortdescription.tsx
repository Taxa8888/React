import React, { FC, ReactElement } from 'react';
import './sortdescription.style.scss';
import { useSelector } from 'react-redux';

export const SortDescription: FC<SortDescriptionProps> = (): ReactElement => {
    const chosenMovie = useSelector((store) => store.chosenMovie);
    const { genres } = chosenMovie;
    return (
        <div className="sortDescriprionContainer">
            <div className="sortDescriprionBy">{`Films by ${genres.join(', ')} genres`}</div>
        </div>
    );
};
