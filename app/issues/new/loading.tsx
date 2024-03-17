import IssueFormSkeleton from "@/app/issues/_components/IssueFormSkeleton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssuePage = () => {
   return <IssueFormSkeleton />;
};

export default LoadingNewIssuePage;
