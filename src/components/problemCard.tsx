"use client"

import { Trash } from 'lucide-react';
import Link from "next/link";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel} from "@/components/ui/field";
import { ScrollArea } from "@/components/ui/scroll-area"

import { Problem, Tag } from "@/types/problem";
import { useProblems } from "@/hooks/useProblems";
import { TAGS } from "@/constants/tags";
import { ChangeButton } from "@/components/changeButton"



type ProblemCardProps = {
    problem: Problem,
    deleteProblem: (id: string) => void,
    changeProblem: (updateProbrem: Problem) => void,
}

export function ProblemCard({
    problem,
    deleteProblem,
    changeProblem,
}: ProblemCardProps) {


    return (
        <Card className="w-72">
            <CardHeader>
                
                <CardDescription>{`${problem.contest}${problem.contnum}`}</CardDescription>
                <Link href={problem.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-[18px]">{problem.title}</Link>
            </CardHeader>
            <CardContent>
                <p>Tags</p>
                <Separator className="my-1"/>
                <ScrollArea className="h-12">
                    {
                        problem.tags.map((tag) => (
                            <Badge className="m-0.5">{tag}</Badge>
                    ))}
                </ScrollArea>
                <div className='flex flex-wrap gap-2 items-start justify-end'>
                    <Button variant="outline" onClick={() => deleteProblem(problem.id)}><Trash /></Button>
                    <ChangeButton 
                        problem={problem}
                        changeProblem={changeProblem}>
                    </ChangeButton>
                </div>

            </CardContent>

        </Card>
    )
}