"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel} from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import { Problem, Tag } from "@/types/problem";
import { useProblems } from "@/hooks/useProblems";
import { TAGS } from "@/constants/tags";

type AddButtonProps = {
    problem: Problem,
    changeProblem: (problem: Problem) => void
}

export function ChangeButton({ problem, changeProblem }: AddButtonProps){
    const [newProblem, setNewProblem] = useState<Problem>(problem);
    // const [number, setNumber] = useState("");
    // const [title, setTitle] = useState("");
    // const [link, setLink] = useState("");

    // const {
    //     problems, addProblem, deleteProblem 
    // } = useProblems();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}><Pencil/></Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Change Problem
                    </DialogTitle>
                </DialogHeader>
                <Separator></Separator>
                <FieldGroup>
                    <Field>
                        <FieldLabel>Contest name</FieldLabel>
                        <Input placeholder="ABC"
                            value={newProblem.contest}
                            onChange={(e) => 
                                setNewProblem({
                                    ...newProblem,
                                    contest: e.target.value})
                            } />
                    </Field>
                    <Field>
                        <FieldLabel>Contest number</FieldLabel>
                        <Input placeholder="333"
                            value={newProblem.contnum}
                            onChange={(e) => 
                                setNewProblem({
                                    ...newProblem,
                                    contnum: e.target.value})
                            } />
                    </Field>
                    <Field>
                        <FieldLabel>Problem title</FieldLabel>
                        <Input placeholder="D - eee"
                            value={newProblem.title}
                            onChange={(e) => 
                                setNewProblem({
                                    ...newProblem,
                                    title: e.target.value})
                            } />
                    </Field>
                    <Field>
                        <FieldLabel>Problem link</FieldLabel>
                        <Input placeholder="https://"
                            value={newProblem.url}
                            onChange={(e) => 
                                setNewProblem({
                                    ...newProblem,
                                    url: e.target.value})
                            } />
                    </Field>

                    <Field>
                        <FieldLabel>Tags</FieldLabel>
                        <Separator />
                        <ToggleGroup
                            multiple={true}
                            className={`flex flex-wrap justify-start`}
                            value={newProblem.tags}
                            onValueChange={(val) =>
                                setNewProblem(prev => ({
                                    ...prev,
                                    tags: val as Tag[]
                                }))
                            }
                        >
                            {TAGS.map((tag) => (
                                <ToggleGroupItem
                                key={tag}
                                value={tag}>
                                    {tag}
                                </ToggleGroupItem>
                            ))}

                        </ToggleGroup>
                    </Field>
                </FieldGroup>

                <DialogFooter >
                    <DialogClose asChild>
                        <Button type="submit" 
                            onClick={() =>{
                                changeProblem(newProblem);
                            }}>Change</Button>
                    </DialogClose>
                </DialogFooter>

            </DialogContent>

        </Dialog>
    );
}