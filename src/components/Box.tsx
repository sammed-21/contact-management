import React from "react";
interface BoxProps {
  title: string;
  case?: number;
  totalCase?: number;
  loading?:boolean
}
const Box: React.FC<BoxProps> = ({ title, case: customCase, totalCase,loading }) => {
  return (
    <div className="min-w-[10rem] p-1">
      <a
        href="#"
        className="block min-w-[10rem] max-h-[5rem] p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        {loading ? <>
          <div>...</div>
        </> :<>
        <p className="  text-md font-bold tracking-tight text-gray-500 dark:text-white">
          {title}
        </p>
        <p className={`font-normal text-gray-400`}> {customCase || "--"}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {totalCase ||0}{" "}
        </p>
        </>
    }
      </a>
    </div>
  );
};

export default Box;
