import React, { useEffect } from "react";

const PopupDialog = ({
  isSelected,
  setIsSelected,
  title,
  description,
  githublink,
}) => {
  const handleClose = () => {
    setIsSelected(false);
  };

  return (
    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      className={
        `overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-screen md:inset-0 h-[calc(100%-1rem)] max-h-full ` +
        (isSelected ? "block" : "hidden")
      }
    >
      <div className="relative w-full max-w-2xl max-h-full p-4 ">
        <div className="relative rounded-lg shadow bg-slate-400 dark:bg-gray-700 ">
          <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent bg-white rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 space-y-4 md:p-5">
            <p className="text-xl font-bold leading-relaxed text-white dark:text-gray-400">
              <span className="font-bold text-black">Github: </span>
              <a className="underline" href={githublink} target="_blank">
                {githublink}
              </a>
            </p>
            <p className="text-base leading-relaxed text-white dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDialog;
