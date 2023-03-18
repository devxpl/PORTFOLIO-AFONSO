interface HeaderProps {
  classlogo: string;
  name: string;
  desenvolvedor: string;
};

export const Header = (props: HeaderProps): JSX.Element => {

  return (
<>
  <section className="
        flex
        flex-col
        items-center
        ">
    <div className="
        sm:pr-7
        sm:mt-5
        xsm:mt-5
        xsm:mb-5
        xsm:pr-7
        ">
      <h1
        className="
        text-3xl
        font-mono
        text-violet-900
        lg:pb-15
        lg:p-5
        border-dashed
        border-2
        border-violet-900
        xsm:ml-7
        xsm:text-2xl
        xsm:mb-3
        sm:pr-2
        sm:pl-2
        shadow-md shadow-violet-800/20
        ">
        {props.desenvolvedor}
      </h1>
    </div>
      <img
        className="
        w-20
        sm:pt-10
        rounded-md
        lg:mb-15"
        src={props.classlogo}
        />
      <h2
        className="
        text-3xl
        font-mono
        mb-3
        text-white
        lg:pt-5
        bg-clip-text
        ">
        {props.name}
      </h2>
  </section>
</>
  );
};
