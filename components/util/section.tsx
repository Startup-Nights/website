import React from "react";

export const Section = ({ children, className = "" }) => {
    const sectionColor = "bg-slate-800 text-slate-300";

    return (
        <section
            className={`flex-1 relative transition duration-150 ease-out body-font overflow-hidden ${sectionColor} ${className}`}
        >
            {children}
        </section>
    );
};
