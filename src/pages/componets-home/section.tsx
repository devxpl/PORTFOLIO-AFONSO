import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaFileAlt, FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';

interface SectionProps {
  classlogo: string;
  name: string;
  desenvolvedor: string;
};

export const Section = (props: SectionProps): JSX.Element => {

  return (
    <>
    <section className="flex flex-col items-center mb-40 ">
     <h1
        className="text-3xl font-mono text-violet-900 lg:pb-15 lg:p-5 border-dashed border-2 border-violet-900 xsm:ml-7 xsm:text-2xl xsm:mb-3">
        {props.desenvolvedor}
     </h1>
     <img
        src={props.classlogo}
        className="w-20 sm:pt-10 rounded-md lg:mb-15"/>
      <h2
          className="text-2xl font-mono mb-3 text-white lg:pt-5">{props.name}
      </h2>
        <Icon color="white" size={32}/>
    </section>
    </>
  );
};

interface InstagramIconProps {
  color: string;
  size: number;
};
export const Icon = (propsIcon: InstagramIconProps): JSX.Element => {
  return (
    <>
     <a className='text-xl font-mono mb-3 text-violet-900 hover:bg-white rounded-md'>INSTAGRAM</a>
      <div className="flex space-x-4">
        <a href='https://www.instagram.com/henriquebachelli/' target="_blank" >
          <FaInstagram className='mb-2'color={propsIcon.color} size={propsIcon.size} />
        </a>
      </div>
      <a className='text-xl font-mono mb-3 text-violet-900 hover:bg-white rounded-md'>Linkdien</a>
      <div className="flex space-x-4">
        <a href='https://www.linkedin.com/in/afonso-henrique-0b6494160/' target="_blank" >
          <FaLinkedin className='mb-2'color={propsIcon.color} size={propsIcon.size} />
        </a>
      </div>
      <a className='text-xl font-mono mb-3 text-violet-900 hover:bg-white rounded-md'>GitHub</a>
      <div className="flex space-x-4">
        <a href='https://github.com/devxpl' target="_blank" >
          <FaGithub className='mb-2' color={propsIcon.color} size={propsIcon.size} />
        </a>
      </div>
      <a className='text-xl font-mono mb-3 text-violet-900 hover:bg-white rounded-md'>WhatsApp</a>
      <div className="flex space-x-4">
        <a href='https://wa.me/19987721696' target="_blank" >
          <FaWhatsapp className='mb-2' color={propsIcon.color} size={propsIcon.size} />
        </a>
      </div>
    </>
  );
};
