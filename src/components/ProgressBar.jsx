import React from 'react';

const ProgressBar = ({ percent, color }) => {
    return (
        <div className="w-full bg-gray-200 rounded shadow-sm overflow-hidden mb-4">
            <div
                className={`h-4 text-xs font-bold text-center text-black bg-${color}-500 animate-move-stripes bg-stripes`}
                style={{ width: `${percent}%` }}
            >
                {percent}%
            </div>
        </div>
    );
};


export default ProgressBar;
