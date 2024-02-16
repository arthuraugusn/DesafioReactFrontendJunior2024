export default function Exclude(custom: {
  class: string;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={custom.class}
      onMouseEnter={() => custom.setIsHovered(true)}
      onMouseLeave={() => custom.setIsHovered(false)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
