import { RedirectIcon } from "@/assets/icons";

interface Props {
  label: string;
  className?: string;
}

const RedirectButton = ({ label, className = "" }: Props) => {
  return (
    <div className={`flex cursor-pointer flex-row gap-2 transition-all duration-200 ease-in-out group-hover:gap-3 group-hover:opacity-80 ${className}`}>
      <span className="mt-[9px] text-[15px] leading-[100%] font-normal tracking-[0%] underline underline-offset-[7px]">
        {label}
      </span>
      <span className="mb-[9px] transition-transform duration-200 ease-in-out group-hover:translate-x-1">
        <RedirectIcon color="currentColor" />
      </span>
    </div>
  );
};

export default RedirectButton;
