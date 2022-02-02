import React, { FC, ReactElement } from 'react';
import ReactLoading from 'react-loading';
import { LoadingProps } from './loading.types';
import './loading.style.scss';

export const Loading: FC<LoadingProps> = ({ type, color }): ReactElement => (
    <div className="loading">
        <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
);
