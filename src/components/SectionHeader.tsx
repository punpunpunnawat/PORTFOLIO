type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-4 px-4 sm:px-8 md:px-16 lg:px-32 w-full">
      <div className="flex-1 h-px bg-[linear-gradient(to_left,white_25%,transparent_100%)]" />
      <h2 className=" text-white">{title}</h2>
      <div className="flex-1 h-px bg-[linear-gradient(to_right,white_25%,transparent_100%)]" />
    </div>
  );
};

export default SectionHeader;
