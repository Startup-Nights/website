import React from "react";

export const Container = ({
    children,
    paddy = "small",
    paddx = "small",
    width = "large",
    className = "",
    ...props
}) => {
    const verticalPadding = {
        custom: "",
        none: "py-0",
        small: "py-8 sm:py-12",
        medium: "py-12",
        large: "py-24",
        default: "py-12 sm:py-24",
    };

    const horizontalPadding = {
        custom: "",
        none: "px-0",
        small: "px-6 sm:px-8",
    };

    const widthClass = {
        small: "max-w-4xl",
        medium: "max-w-5xl",
        large: "max-w-7xl",
        full: "max-w-full",
        custom: "",
    };

    return (
        <div
            className={`${widthClass[width]} mx-auto ${verticalPadding[paddy]} ${horizontalPadding[paddx]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
