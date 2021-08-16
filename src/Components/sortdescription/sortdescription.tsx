import React, { FC, ReactElement } from 'react';
import { SortDescriptionProps } from './sortdescription.types';
import './sortdescription.style.scss';

export const SortDescription: FC<SortDescriptionProps> = ({
    chosenMovie: { genres },
}): ReactElement => (
    <div className="sortDescriprionContainer">
        <div className="sortDescriprionBy">{`Films by ${genres.join(', ')} genres`}</div>
    </div>
);
