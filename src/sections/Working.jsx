import iPhoneImg from '../assets/iPhone16.svg';

const Working = () => {
  return (
    <section className='h-screen flex flex-col md:grid md:grid-cols-2 gap-4 p-8 md:items-center'>

      <div>

        <h1>Heading</h1>

        <p>This is the para explaining the about the topic mentioned in the heading This is the para explaining the about the topic mentioned in the heading.</p>

      </div>

      <div className="flex items-center justify-center">
        {/* Phone image */}
        <img
          src={iPhoneImg}
          alt="iPhone Mockup"
          className="relative z-10 h-96 w-auto drop-shadow-2xl"
        />
      </div>

    </section>
  );
}

export default Working;