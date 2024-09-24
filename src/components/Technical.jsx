
import Card from './Card';
import Gradient from './Gradient';

const Technical = () => {
  return (
    <div className='relative overflow-x-hidden w-[100vw] py-10'>
      <Gradient degree={220}/>
      <h2 className='text-center font-bold text-4xl m-5 z-10 text-White'>Technical</h2>
      <div className='flex flex-wrap justify-evenly'>
        <Card name="Capture The Flag" page="/Capture_The_Flag" />
        <Card name="Coding Debugging" page="/coding_debugging"/>
        <Card name="Hackathon" page="/hackathon" />
      </div>
      <div className='flex flex-wrap justify-evenly'>
        <Card name="IOT" page="/Iot" />
        <Card name="IT QUIZ" page="/It_quiz" />
        <Card name="UI UX" page="/UiUx" />
      </div>
    </div>
  );
};

export default Technical;
