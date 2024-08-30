interface ButtonProps {
  children: string;
  color?: "primary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button type="button" className={"mx-2 btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
