import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
   issue: Issue;
}

const IssueDetail = ({ issue }: Props) => {
   return (
      <>
         <Heading>title: {issue.title}</Heading>
         <Flex className="space-x-3" my="2">
            <IssueStatusBadge status={issue.status} />
            <Text>title: {issue.createdAt.toDateString()}</Text>
         </Flex>
         <Card className="prose mt-4">
            <ReactMarkdown className="">{issue.description}</ReactMarkdown>
         </Card>
      </>
   );
};

export default IssueDetail;
