import React from "react";

export const Container = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div
            className={`max-w-7xl mx-auto px-6 py-8 sm:py-12 sm:px-8 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
