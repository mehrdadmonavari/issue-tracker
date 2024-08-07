"use client";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import dynamic from "next/dynamic";
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "../../components/ErrorMessage";
import Spinner from "../../components/Spinner";
import { Issue } from "@prisma/client";
import SimpleMDE from "react-simplemde-editor";

type IssueFormData = z.infer<typeof createIssueSchema>;

interface Props {
   issue?: Issue;
}

const IssueForm = ({ issue }: Props) => {
   const {
      register,
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<IssueFormData>({
      resolver: zodResolver(createIssueSchema),
   });
   const [error, setError] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const router = useRouter();

   const onSubmit = handleSubmit(async (data) => {
      try {
         setIsSubmitting(true);
         if (issue) await axios.patch(`/api/issues/${issue.id}`, data);
         else await axios.post("/api/issues", data);
         router.push("/issues");
         router.refresh();
      } catch (error) {
         setIsSubmitting(false);
         setError("an Unexpected error has been occurred");
      }
   });

   return (
      <div className="max-w-xl">
         {error && (
            <Callout.Root color="red" className="mb-5">
               <Callout.Text>{error}</Callout.Text>
            </Callout.Root>
         )}
         <form className="space-y-3" onSubmit={onSubmit}>
            <TextField.Root>
               <TextField.Input
                  placeholder="Title"
                  defaultValue={issue?.title}
                  {...register("title")}
               />
            </TextField.Root>
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
            <Controller
               name="description"
               defaultValue={issue?.description}
               control={control}
               render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
            <Button disabled={isSubmitting}>
               {issue ? "Update Issue " : "Submit New Issue "}
               {isSubmitting && <Spinner />}
            </Button>
         </form>
      </div>
   );
};

export default IssueForm;
