interface ButtonProps {
  children: string;
  color: 'green' | 'red';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, color, onClick }: ButtonProps) {
  return (
    <button
      className={`${
        color === 'green'
          ? 'bg-Primary-1 border-Primary-1'
          : 'bg-Danger-1 border-Danger-1'
      } w-full py-[11px] rounded-[4px] text-White-1 text-xs`}
      onClick={onClick}>
      {children}
    </button>
  );
}
