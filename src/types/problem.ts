import { TAGS } from "@/constants/tags";

export type Tag = ( typeof TAGS )[number];

export type Problem = {
    id: string,
    contest: string,
    contnum: string,
    title: string,
    diff: number,
    tags: Tag[],
    url: string,
    memo: string,
    isSolved: boolean,
}