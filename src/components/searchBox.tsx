'use client'

import { Search } from "lucide-react"
import { useState } from "react";

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel} from "@/components/ui/field";
import { ScrollArea } from "@/components/ui/scroll-area"

import { Problem, Tag } from "@/types/problem";
import { useProblems } from "@/hooks/useProblems";
import { TAGS } from "@/constants/tags";


type SearchBoxProps = {
    filterTags: Tag[]
    onFilterTagsChange: (tags: Tag[]) => void
    searchText: string
    onSearchTextChange: (text: string) => void
}

export function SearchBox({ filterTags, onFilterTagsChange, searchText, onSearchTextChange }: SearchBoxProps){
    //const [filterTags, setFilterTags] = useState<Tag[]>();

    return (
        <FieldGroup className="border-1 p-4 rounded-[10px]">
            <Field>
                <InputGroup>
                    <InputGroupInput placeholder="Search..." 
                                    value={searchText}
                                    onChange={(e) => onSearchTextChange(e.target.value)}/>
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                </InputGroup>
            </Field>
            <Field>
                <FieldLabel>Tags</FieldLabel>
                <Separator/>

            </Field>
            {TAGS.map((tag) => (<Field orientation="horizontal">
                <Checkbox
                    id={`tag-${tag}`}
                    name={`tag-${tag}`}
                    checked={filterTags.includes(tag)}
                        onCheckedChange={(checked) => {
                            if (checked) {
                                onFilterTagsChange([...filterTags, tag])
                            } else {
                                onFilterTagsChange(filterTags.filter(t => t !== tag))
                            }
                        }}
                />
                <FieldLabel htmlFor={`tag-${tag}`}>
                    {tag}
                </FieldLabel>
            </Field>))}
        </FieldGroup>
    )
}