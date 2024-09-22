
const Gradient = ({ degree }) => {
  const gradientStyle = {
    background: `linear-gradient(${degree}deg, rgba(5,0,70,1) 25%, rgba(31,9,102,1) 85%, rgba(59,12,90,1) 100%)`,
    position: 'absolute', // Position it absolutely
    top: 0,
    left: 0,
    height: '100%', // Fill the parent container
    width: '100%',  // Fill the parent container
    zIndex: -1, // Send it to the background
  };

  return <div style={gradientStyle}></div>;
};

export default Gradient;
