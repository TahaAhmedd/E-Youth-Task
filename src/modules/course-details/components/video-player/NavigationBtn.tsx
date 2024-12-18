import {ReactNode} from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ReactNode;
  className?: string;
}

function NavigationBtn({icon, className, ...props}: IProps) {
  return (
    <button aria-label='navigation' className={`navigation-btn ${className}`} {...props}>
      <span className='material-symbols-outlined'>{icon}</span>
    </button>
  );
}

export default NavigationBtn;
