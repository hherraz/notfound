import scarecrow from "../../assets/Scarecrow.png";

const NotFound = () => {
  return (
    <div className="m-2">
      <h3 className="text-lg font-bold leading-6 text-gray-900 p-3 font-inconsolata tracking-widest">
        404 NOT FOUND
      </h3>
      <div className="p-5 md:m-24 md:flex">
        <div className="md:flex-initial">
          <img
            className="w-52 h-auto md:w-auto      "
            src={scarecrow}
            alt="ScareCrow"
          />
        </div>
        <div className="md:flex-initial md:pt-2.5 pt-4">
          <h2 className="text-6xl font-bold md:tracking-wide md:mt-24 font-monospace tracking-wider leading-max">
            I have bad news for you
          </h2>
          <p className="md:pt-10 md:pb-10 pt-20 tracking-wide font-monospace font-normal leading-9">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <div className="bg-gray-700 text-white w-[216px] h-[68px] inline-block align-middle">
            <p className="text-center inline-block align-middle text-[16px] font-monospace font-bold tracking-wider leading-5">
              BACK TO THE HOMEPAGE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NotFound };
