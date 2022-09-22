import scarecrow from "../../assets/Scarecrow.png";

const NotFound = () => {
  return (
    <div className="m-2">
      <h3 className="text-lg font-medium leading-6 text-gray-900 p-3">
        404 NOT FOUND
      </h3>
      <div className="p-5 md:m-24 md:flex">
        <div className="md:flex-initial">
          <img className="" src={scarecrow} alt="ScareCrow" />
        </div>
        <div className="md:flex-initial md:pt-2.5 pt-4">
          <h2 className="text-6xl font-medium leading-9 md:tracking-wide md:mt-24">
            I have bad news for you
          </h2>
          <p className="md:pt-10 md:pb-10 pt-20">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <div className="bg-gray-600 text-lg text-white md:w-52 md:h-auto">
            <p className="mt-20 text-center">BACK TO THE HOMEPAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NotFound };
