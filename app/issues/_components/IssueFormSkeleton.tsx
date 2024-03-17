import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueFormSkeleton = () => {
   return (
      <div>
         <div className="max-w-xl">
            <Skeleton height="2.5rem" />
            <Skeleton height="23rem" />
         </div>
      </div>
   );
};

export default IssueFormSkeleton;
