import React from "react";

const DetailLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-auto h-full inline-block bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default DetailLayout;
