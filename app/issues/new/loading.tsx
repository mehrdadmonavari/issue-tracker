import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssuePage = () => {
   return <div className="max-w-xl">
      <Skeleton height="2.5rem" />
      <Skeleton height="23rem" />
   </div>;
};

export default LoadingNewIssuePage;
