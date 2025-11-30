import "./floatingPageAddress.css";
const FloatingPageAddress = ({ hideSource, currentSource }) => {
  return (
    <div className="floatingPageAddressLayout">
      {hideSource}&nbsp;
      <span className="CurrentSourceStyle">{currentSource}</span>
    </div>
  );
};

export default FloatingPageAddress;
