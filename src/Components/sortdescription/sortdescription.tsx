import React, { FC, ReactElement } from 'react';
import './sortdescription.style.scss';
import { SortDescriptionProps } from './sortdescription.styles';

const SortDescription: FC<SortDescriptionProps> = ({ chosenMovie: { genres } }): ReactElement => (
    <div className="sortDescriprionContainer">
        <div className="sortDescriprionBy">{`Films by ${genres.join(', ')} genres`}</div>
    </div>
);

export default SortDescription;
