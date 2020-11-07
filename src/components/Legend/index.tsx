import React, { FC } from 'react';
import './index.css';

interface LegendProps {
    legend: string
}

export const Legend: FC<LegendProps> = (props) => {
    const {legend} = props;

    return (
        <div className="Legend">
            {legend}
        </div>
    );
};