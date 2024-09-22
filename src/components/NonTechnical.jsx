import Card from './Card';
import Gradient from './Gradient';

const NonTechnial = () => {
  return (
    <div className='relative overflow-x-hidden w-[100vw] py-10'>
      <Gradient degree={310}/>
      <h2 className='text-center font-bold text-4xl m-5 z-10 text-White'>Non Technical</h2>
      <div className='flex flex-wrap justify-evenly'>
        <Card name="Gaming"/>
        <Card name="IT Manager"/>
        <Card name="Photography"/>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        <Card name="Surprise Event"/>
        <Card name="Treasure Hunt"/>
      </div>
    </div>
  );
};

export default NonTechnial;
