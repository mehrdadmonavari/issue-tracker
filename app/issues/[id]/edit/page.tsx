import IssueForm from "../../_components/IssueForm";
import { notFound } from "next/navigation";
import prisma from "@/prisma/client";

interface Props {
   params: { id: string };
}

const EditIssuePage = async ({ params: { id } }: Props) => {
   if (isNaN(+id)) notFound();

   const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id) },
   });

   if (!issue) notFound();

   return <IssueForm issue={issue} />;
};

export default EditIssuePage;
