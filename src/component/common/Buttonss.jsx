import React from "react";

const Buttonss = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  let variantClasses = "";

  switch (variant) {
    case "navIcon":
      variantClasses =
        "text-gray-600 hover:text-black transition hover:scale-110";
      break;
    case "outline":
      variantClasses =
        "bg-white text-black border border-black hover:bg-gray-100 text-sm";
      break;
    case "danger":
      variantClasses = "bg-red-600 text-white hover:bg-red-700 text-sm";
      break;
    case "ghost":
      variantClasses = "bg-transparent text-black hover:bg-gray-100 text-sm";
      break;
    case "primary":
    default:
      variantClasses = "bg-black text-white hover:bg-gray-800 text-sm";
      break;
    case "circle":
      variantClasses =
        "bg-black text-white rounded-full hover:bg-gray-800 h-10 w-10 flex items-center justify-center text-sm";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium transition  ${variantClasses} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Buttonss;
