import {ArrowUp} from 'lucide-react'

const About = () => {
  return (
    <section className="overflow-hidden flex min-h-[720px]" id="about-us">
      <div className="flex-1 flex flex-col gap-y-4 justify-center relative ">
        <div className="about-us__image-sushi3 flex-1 bg-white rounded-bl-3xl">
          <img src="assets/sushi-3.png" alt="sushi" data-aos="fade-right" />
        </div>

        <button className=" absolute right-0 py-5 px-8 min-h-8 rounded-l-full outline-none border-none bg-[#121212] text-white flex ">
          <span className='jakarta font-semibold'>Learn More</span>

          <ArrowUp className='text-white w-7 h-7 mx-3 rotate-45 '  />
        </button>

        <div className="about-us__image-sushi2 flex-1 bg-white rounded-tl-3xl">
          <img src="assets/sushi-2.png" alt="sushi"  data-aos="fade-right" />
        </div>
      </div>

      <div className="p-16 flex-1 flex flex-col items-center"  data-aos="fade-left">
        <p className="sushi__subtitle">About Us </p>
        <h3 className="font-semibold playfair mt-4 text-[64px] playfair">Our mission is to bring true Zerban's style baking to you.</h3>
        <p className="text-[18px] font-medium jakarta opacity-60 my-8 mx-0 leading-9 letter tracking-tight">The Bakery was founded as a tribute to the baked goods Zerbans delivered, as well as to his history, support, consistency, and what he  learnt from him.
        </p>
      </div>
    </section>

  )
}

export default About