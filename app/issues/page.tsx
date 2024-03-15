import prisma from "@/prisma/client";
import { Button, Table, TableCell } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";

const IssuesPage = async () => {
   const issues = await prisma.issue.findMany();

   return (
      <div>
         <div className="mb-5">
            <Button>
               <Link href="/issues/new">New Issue</Link>
            </Button>
         </div>
         <Table.Root variant="surface">
            <Table.Header>
               <Table.Row>
                  <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell className="hidden md:table-cell">
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
                        {issue.title}
                        <div className="block md:hidden">
                           <IssueStatusBadge status={issue.status} />
                        </div>
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
