import { Cell } from './Cell.tsx'

export const Word = () => {
    const solution="TABLE";
    const emptyCells = Array.from(Array(solution.length))
    console.log("emptyCells: ",emptyCells);
  
    return (
      <div className="flex justify-center mb-1">
        {emptyCells.map((_, i) => (
          <Cell key={i} />
        ))}
      </div>
    )
  }
  