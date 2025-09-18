
import React from 'react';

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-5 h-5 ${className}`} aria-hidden="true" width="20px" height="25px" viewBox="0 0 50 80" xmlSpace="preserve">
        <polyline stroke="currentColor" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" points="0, 0 45, 40 0, 80" />
    </svg>
);
