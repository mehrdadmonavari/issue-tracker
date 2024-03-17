import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { Pencil2Icon } from "@radix-ui/react-icons";

interface Props {
   IssueId: number;
}

const EditIssueButton = ({ IssueId }: Props) => {
   return (
      <Link href={`/issues/${IssueId}/edit`} className="cursor-pointer">
         <Button>
            <Pencil2Icon />
            Edit Issue
         </Button>
      </Link>
   );
};

export default EditIssueButton;
