import { editIssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
   request: NextRequest,
   { params }: { params: { id: string } }
) {
   if (isNaN(+params.id)) return NextResponse.json("Invalid id", { status: 404 });

   const body = await request.json();
   const validation = editIssueSchema.safeParse(body);

   if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

   const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
   });

   if (!issue) return NextResponse.json("Invalid id", { status: 404 });

   const updatedIssue = await prisma.issue.update({
      where: { id: parseInt(params.id) },
      data: {
         title: body.title,
         description: body.description,
      },
   });

   return NextResponse.json(updatedIssue);
}
