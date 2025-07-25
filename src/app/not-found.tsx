import Link from "next/link";
import Button from "@/@components/core/Button/Button";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[94vh] bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {/* <Image src={noDataFound} alt={"no data found"} /> */}
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      {/* Return Home Button */}
      <Link href="/">
        <Button
          className={
            "disabled:bg-gray-400 rounded-md px-6 pt-3  bg-blue-400 flex justify-center font-medium text-white w-full mt-4"
          }
          type="submit"
        >
          Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
