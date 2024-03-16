import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
   params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
   if (isNaN(+id)) notFound();

   const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id) },
   });

   if (!issue) notFound();

   return (
      <div>
         <p>title: {issue.title}</p>
         <p>title: {issue.description}</p>
         <p>title: {issue.status}</p>
         <p>title: {issue.createdAt.toDateString()}</p>
      </div>
   );
};

export default IssueDetailPage;
