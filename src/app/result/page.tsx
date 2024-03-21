export default function Result() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full space-y-6 flex flex-col items-center">
        <h3 className="text-lg font-medium tracking-wide text-white">
          Polls Result
        </h3>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-5">
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Do you like Apple?
            </h5>

            <div className="flex mt-4 md:mt-6">
              <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white">
                Yes 12
              </p>
              <p className="py-2 px-4 ms-2 text-sm font-medium text-White focus:outline-none">
                No 9
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-5">
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Do you like Apple?
            </h5>

            <div className="flex mt-4 md:mt-6">
              <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white">
                Yes 12
              </p>
              <p className="py-2 px-4 ms-2 text-sm font-medium text-White focus:outline-none">
                No 9
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
