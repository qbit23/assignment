interface IIconProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export default function Icon({ name, className, onClick }: IIconProps) {
  return (
    <span
      className={`material-icons cursor-pointer ${className}`}
      onClick={onClick}
    >
      {name}
    </span>
  );
}
