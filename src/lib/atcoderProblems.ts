export async function fetchProblemInfo(problemId: string) {
    const res = await fetch(
        "https://kenkoooo.com/atcoder/resources/problems.json",
        { cache: "force-cache" }
    )

    const problems = await res.json();
    
    console.log("problemId:", problemId)
    const found = problems.find((p: { id: string }) => p.id === problemId)
    console.log("found:", found)
    
    return found;
}