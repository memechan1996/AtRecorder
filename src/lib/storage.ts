"use client";

import { Problem } from "@/types/problem";

const KEY = "problems";

export function loadProblems(): Problem[] {
    const saved = localStorage.getItem(KEY);
    if(!saved) return [];
    return JSON.parse(saved);
}

export function saveProblems(
    problems: Problem[]
) {
    localStorage.setItem(
        KEY,
        JSON.stringify(problems)
    );
}