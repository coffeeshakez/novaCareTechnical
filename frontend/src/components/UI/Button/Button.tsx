import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

interface LinkButtonProps extends Omit<ButtonProps, 'type'> {
  to: string;
  external?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  type = 'button',
  onClick,
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  
  return (
    <button
      className={buttonClass}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  to,
  external = false,
  onClick,
}: LinkButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  
  if (external) {
    return (
      <a 
        href={to}
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={to}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Button;
