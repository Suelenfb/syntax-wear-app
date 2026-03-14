interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size: "sm" | "nd" | "lg";
}
export const Button = ({ children , variant = "primary" , size = "nd" }: ButtonProps) => {
  const buttonStyles = {
    base: "flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 font-medium rounded-full transition py-2.5",
    variant: {
      primary: "bg-white text-[#6329A2] hover:bg-gray-100",
      secondary: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    },
    size: {
      sm: "px-5",
      nd: "px-8",
      lg: "px-10",
    }
  };

  const className = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`;

  return <button className={className}>{children}</button>;
};

