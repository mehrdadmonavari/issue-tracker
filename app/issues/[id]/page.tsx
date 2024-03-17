import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import EditIssueButton from "./EditIssueButton";
import IssueDetail from "./IssueDetail";

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
      <Grid columns={{ initial: "1", md: "2" }}>
         <Box>
            <IssueDetail issue={issue} />
         </Box>
         <Box>
            <EditIssueButton IssueId={issue.id} />
         </Box>
      </Grid>
   );
};

export default IssueDetailPage;
