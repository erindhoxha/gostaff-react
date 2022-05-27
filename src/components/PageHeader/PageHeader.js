import { Link } from "react-router-dom";

const PageHeader = (props) => {
    return (
    <>
    <div>
      <div className="py-0 pb-7 w-full ">
        <div className="flex flex-col items-start justify-between lg:items-center lg:flex-row md:flex-row md:items-center">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold leading-normal text-gray-800">{props.name}</p>    
            <div className="flex mt-3 gap-x-2">
              <p className="text-xs leading-3 text-indigo-700 cursor-pointer"><Link to="/">Home</Link></p>
              <svg className="cursor-pointer" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.10332 3.06284L8.04082 7.00034L4.10332 10.9378L5.03139 11.8659L9.89697 7.00034L5.03139 2.13477L4.10332 3.06284Z" fill="#4338CA" />
              </svg>
              <p className="text-xs leading-3 text-indigo-700 cursor-pointer"><Link to={props.url}>{props.link}</Link></p>
            </div>
          </div>
          <div className="flex items-start justify-start w-full lg:justify-end md:justify-end gap-x-4 lg:mt-0 md:mt-0 mt-7">
            <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border max-w-[81px]  w-full ">
              Back
            </button>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex flex-col gap-x-5 lg:flex-row md:flex-row gap-y-4">
          <div className="flex gap-x-2">
            <p className="text-sm leading-none text-gray-600 mt-[1px] max-w-4xl">{props.description}</p>
          </div>
        </div>
      </div>    
      <div>
      </div>
    </div>
        </>
      );
    }
export default PageHeader;