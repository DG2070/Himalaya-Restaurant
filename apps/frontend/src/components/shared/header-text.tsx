interface HeaderTextProps {
  cursiveText: string;
  text: string;
  colorText: string;
}
const HeaderText = ({ cursiveText, text, colorText }: HeaderTextProps) => {
  return (
    <div className="pb-11">
      <div className="great-vibes-regular-32 text-body text-center leading-[180%]! ">
        {cursiveText}
      </div>
      <div className="text-center playfair-medium-58 leading-[100%]! text-heading">
        {text} <span className="text-primary">{colorText}</span>
      </div>
    </div>
  );
};

export default HeaderText;
