import CtaButton from '../components/ui/CtaButton';
import iPhoneImg from '../assets/iPhone16.svg';


const Breather = () => {
  return (
    <section id='waitlist' className='h-[60vh] flex flex-col justify-around items-center'>

      <h1 className='font-bold text-4xl md:text-6xl'>Be The First To Get Access</h1>

        {/* iPhone Mockup */}
      <div className="flex items-center justify-center">

        <img
          src={iPhoneImg}
          alt="iPhone Mockup"
          className="h-96 w-auto"
        />

        <p>HeartLink seamlessly evolves with your relationship — from discovery and connection to managing life together in one beautiful platform.</p>

      <CtaButton buttonText={'Join The Beta'} />

      </div>

    </section>
  );
}

export default Breather;