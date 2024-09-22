import Cyberpunk2 from '../assets/CyberpunkThemeGreen.gif';
import Gradient from './Gradient';

const Theme = () => {
  return (
    <div className="relative h-full flex flex-col justify-start items-center overflow-hidden box-border py-20">
      <Gradient degree={310} />
      <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-White mt-8">Theme</h1>
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-4 mt-24">
        <p className="text-White text-xl pr-5 max-w-lg text-center md:text-left">
          The cyberpunk theme immerses you in a visually stunning realm where futuristic aesthetics collide with vibrant colors and neon lights, evoking a sense of mystery and excitement.
        </p>
        <img src={Cyberpunk2} alt="Cyberpunk Theme" className="w-72 h-52 rounded-xl" />
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-4 mt-24">
        <img src={Cyberpunk2} alt="Cyberpunk Theme" className="w-72 h-52 rounded-xl" />
        <p className="text-White text-xl pr-5 max-w-lg text-center md:text-left">
          The cyberpunk theme immerses you in a visually stunning realm where futuristic aesthetics collide with vibrant colors and neon lights, evoking a sense of mystery and excitement.
        </p>
      </div>
    </div>
  );
};

export default Theme;
