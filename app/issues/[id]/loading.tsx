import { Heading, Flex, Card, Box, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
   return (
      <Box>
         <Heading>
            <Skeleton width="40rem" />
         </Heading>
         <Flex className="space-x-3" my="2">
            <Skeleton width="5rem" />
            <Text>
               <Skeleton width="8rem" />
            </Text>
         </Flex>
         <Card className="prose mt-4">
            <Skeleton count={3} />
         </Card>
      </Box>
   );
};

export default LoadingIssueDetailPage;
