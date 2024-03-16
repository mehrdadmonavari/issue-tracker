import prisma from "@/prisma/client";
import { Table, TableCell } from "@radix-ui/themes";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";
import delay from "delay";
import IssueToolBar from "./IssuesToolBar";
import Link from "../components/Link";

const IssuesPage = async () => {
   const issues = await prisma.issue.findMany();

   await delay(1000);

   return (
      <div>
         <IssueToolBar />
         <Table.Root variant="surface">
            <Table.Header>
               <Table.Row>
                  <Table.ColumnHeaderCell className="w-[35rem]">Issue</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell className="hidden md:table-cell w-[30rem]">
                     Status
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell className="hidden md:table-cell">
                     Created At
                  </Table.ColumnHeaderCell>
               </Table.Row>
            </Table.Header>
            <Table.Body>
               {issues.map((issue) => (
                  <Table.Row key={issue.id}>
                     <TableCell>
                        <Link href={`/issues/${issue.id}`}>
                           {issue.title}
                           <div className="block md:hidden">
                              <IssueStatusBadge status={issue.status} />
                           </div>
                        </Link>
                     </TableCell>
                     <TableCell className="hidden md:table-cell">
                        <IssueStatusBadge status={issue.status} />
                     </TableCell>
                     <TableCell className="hidden md:table-cell">
                        {issue.createdAt.toDateString()}
                     </TableCell>
                  </Table.Row>
               ))}
            </Table.Body>
         </Table.Root>
      </div>
   );
};

export default IssuesPage;
