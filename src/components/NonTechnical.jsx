import Card from './Card';
import Gradient from './Gradient';

const NonTechnial = () => {
  return (
    <div className='relative overflow-x-hidden w-[100vw] py-10'>
      <Gradient degree={310}/>
      <h2 className='text-center font-bold text-4xl m-5 z-10 text-White'>Non Technical</h2>
      <div className='flex flex-wrap justify-evenly'>
        <Card name="Gaming" page="/gaming" />
        <Card name="IT Manager" page="/it_manager" />
        <Card name="Photography"  page="/photography" />
      </div>
      <div className='flex flex-wrap justify-evenly'>
        <Card name="Surprise Event" page="/surprise" />
        <Card name="Treasure Hunt" page="treasure_hunt"/>
      </div>
    </div>
  );
};

export default NonTechnial;
