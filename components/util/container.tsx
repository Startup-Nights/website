import React from "react";

export const Container = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div
            className={`max-w-7xl mx-auto px-6 py-12 sm:py-18 sm:px-8 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
