type SkillBoxProps = {
	iconClass: string;
	title: string;
};

const SkillBox = ({ iconClass, title }: SkillBoxProps) => {
	return (
		<div className="flex flex-row border-gradient-white w-48 p-2 gap-2 items-center overflow-hidden bg-primary-linear-30">
			<i
				className={`${iconClass} text-5xl`}
				style={{ filter: "drop-shadow(0 0 64px currentColor)" }}
			/>
			<span className="detail w-full text-center">{title}</span>
		</div>
	);
};

export default SkillBox;
