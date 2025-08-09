import { RedirectIcon } from "@/assets/icons";

interface Props {
  label: string;
  className?: string;
}

const RedirectButton = ({ label, className = "" }: Props) => {
  return (
    <div className={`flex cursor-pointer flex-row gap-2 ${className}`}>
      <span className="mt-[9px] text-[15px] leading-[100%] font-normal tracking-[0%] underline underline-offset-[7px]">
        {label}
      </span>
      <span className="mb-[9px]">
        <RedirectIcon />
      </span>
    </div>
  );
};

export default RedirectButton;
