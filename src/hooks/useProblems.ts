"use client";

import { useState, useEffect} from "react";

import { Problem } from "@/types/problem";
import { loadProblems, saveProblems } from "@/lib/storage";

export function useProblems() {
    const [problems, setProblems] = useState<Problem[]>([]);

    useEffect(() => {
        setProblems(loadProblems());
    }, []);

    function addProblem(problem: Problem){
        const next = [...problems, problem];

        setProblems(next);
        saveProblems(next);
    }

    function deleteProblem(id: string){
        const next = problems.filter(
            p => p.id !== id
        );

        setProblems(next);
        saveProblems(next);
    }

    return {
        problems,
        addProblem,
        deleteProblem,
    }
}