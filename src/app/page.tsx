'use client';

import { useState } from "react";

import { Separator } from "@/components/ui/separator";


import { AddButton } from "@/components/addButton";
import { ProblemCard } from "@/components/problemCard";
import { SearchBox } from "@/components/searchBox";
import { Header } from "@/components/header";

import { Problem } from "@/types/problem";
import { useProblems } from "@/hooks/useProblems";

export default function Home() {
    const [filterTags, setFilterTags] = useState<Tag[]>([]);
    const [searchText, setSearchText] = useState("");
    
    const {
        problems, addProblem, deleteProblem 
    } = useProblems();

    const filteredProblems = problems.filter(problem => {
        if (!problem.title) return false
        const matchesText = problem.title.includes(searchText)
        const matchesTags = filterTags.length === 0 || filterTags.every(tag => problem.tags.includes(tag))
        return matchesText && matchesTags
    });

  return (
    <div className="w-full">
      <Header/>
      <div className="m-4 mt-[130px] justify-end">
        <AddButton addProblem={addProblem}></AddButton>
      </div>
      <Separator className="my-3"></Separator>
      <div className="grid grid-cols-[240px_1fr] gap-4 m-4">
        <SearchBox
            filterTags={filterTags}
            onFilterTagsChange={setFilterTags}
            searchText={searchText}
            onSearchTextChange={setSearchText}
        ></SearchBox>
        
        <div className="flex flex-wrap gap-4 items-start">
          {filteredProblems.map((prob) => (
              <ProblemCard
                key={prob.id}
                problem={prob}
                deleteProblem={deleteProblem}
              ></ProblemCard>
          ))}
        </div>
        

      </div>
      {/* <ProblemCard
          problem={
            {id: "aaa",
            contest: "ABC",
            contnum: "810",
            title: "F - yarimasune",
            diff: 2,
            tags: [   "全探索",
                      "二分探索",
                      "累積和",
                      "DFS",
                      "BFS",
                      "DP",

                      "グラフ",
                      "グリッド",
                      "木",
                      "有向グラフ",
                      "トポロジカルソート",
                      "LCA",
                      "SCC",],
            url: "https://atcoder.jp/?lang=ja",
            memo: "",
            isSolved: false,}
        }
        ></ProblemCard> */}
    </div>
  );
}
