import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
   params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
   if (isNaN(+id)) notFound();

   const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id) },
   });

   if (!issue) notFound();

   await delay(1000);

   return (
      <div>
         <Heading>title: {issue.title}</Heading>
         <Flex className="space-x-3" my="2">
            <IssueStatusBadge status={issue.status} />
            <Text>title: {issue.createdAt.toDateString()}</Text>
         </Flex>
         <Card className="prose mt-4">
            <ReactMarkdown className="">{issue.description}</ReactMarkdown>
         </Card>
      </div>
   );
};

export default IssueDetailPage;
