/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full w-full p-16 lg:mt-20">
      <Helmet>
        <title>Match Mingle || Error</title>
      </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center flex flex-col items-center justify-center">
          <div>
            <img src="https://i.ibb.co/Tb6GCWP/404-Error.png" alt="" />
          </div>
          <div className="mt-14">
            <p className="text-2xl font-semibold md:text-3xl font-barlow">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600 font-barlow font-semibold text-xl">
              We apologize for the inconvenience. You can use our navbar to find
              what you're looking for, or contact us for further assistance..
            </p>
            <Link
              to="/"
              rel="noopener noreferrer"
              className="px-8 py-3 font-semibold rounded dark:bg-red-700 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
