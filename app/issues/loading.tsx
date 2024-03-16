import { Table, TableCell } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueToolBar from "./IssueToolBar";

const LoadingIssuePage = () => {
   const issues = [1, 2, 3, 4, 5];

   return (
      <div>
         <IssueToolBar />
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
                  <Table.Row key={issue}>
                     <TableCell>
                        <Skeleton />
                     </TableCell>
                     <TableCell className="hidden md:table-cell">
                        <Skeleton />
                     </TableCell>
                     <TableCell className="hidden md:table-cell">
                        <Skeleton />
                     </TableCell>
                  </Table.Row>
               ))}
            </Table.Body>
         </Table.Root>
      </div>
   );
};

export default LoadingIssuePage;
