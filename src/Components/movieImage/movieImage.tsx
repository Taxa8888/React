import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import noImage from '../../assets/no_image.png';
import { MovieImageProps } from './movieImage.types';

export const MovieImage: FC<MovieImageProps> = ({ title, posterPath, className }): ReactElement => {
    const [isLoadImageError, setIsLoadImageError] = useState(false);

    useEffect(() => {
        setIsLoadImageError(false);
    }, [posterPath]);

    const hangleImageError = useCallback(() => {
        setIsLoadImageError(true);
    }, []);

    return (
        <>
            {isLoadImageError ? (
                <img className={className} src={`${noImage}`} alt={title} />
            ) : (
                <img
                    className={className}
                    onError={hangleImageError}
                    src={posterPath}
                    alt={title}
                />
            )}
        </>
    );
};
