// fixed decorative layer behind every page, styled in globals.css
const Background = () => {
  return (
    <div aria-hidden="true" className="site-bg">
      <div className="glow glow-green" />
      <div className="glow glow-blue" />
      <div className="glow glow-pink" />
    </div>
  );
};

export default Background;
