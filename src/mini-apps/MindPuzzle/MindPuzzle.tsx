import response from "@/assets/data/mind-puzzle.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import styles from "./MindPuzzle.module.css";

interface Item {
    id: string;
    src: string;
    content: number;
    isActive: boolean;
    isMatched: boolean;
}

const shuffleArr = (arr: Item[]) => {
    return arr.sort(() => Math.random() - 0.5);
};
const transform2DArr = (arr: Item[], rows: number, cols: number) => {
    const rowArr = [];

    for (let i = 0; i < rows; i++) {
        const colArr = [];
        const fromIndex = i * cols;
        const toIndex = Math.min(fromIndex + cols, arr.length);
        for (let j = fromIndex; j < toIndex; j++) {
            colArr.push(arr[j]);
        }
        rowArr.push(colArr);
    }
    return rowArr;
};
const MindPuzzle = () => {
    const [state, setState] = useState<Item[][]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedIndexes, setSelectedIndexes] = useState<number[][]>([]);
    const [hasWon, setHasWon] = useState(false);

    const evaluateLogic = () => {
        const newState = structuredClone(state);
        const [prev, curr] = selectedIndexes;
        const prevSelected = newState[prev[0]][prev[1]];
        const currentSelected = newState[curr[0]][curr[1]];
        const isMatched = prevSelected.content === currentSelected.content;
        if (isMatched) {
            prevSelected.isActive = false;
            currentSelected.isActive = false;
            prevSelected.isMatched = true;
            currentSelected.isMatched = true;
        } else {
            prevSelected.isActive = false;
            currentSelected.isActive = false;
        }
        setSelectedIndexes([]);
        newState[prev[0]][prev[1]] = prevSelected;
        newState[curr[0]][curr[1]] = currentSelected;
        const won = newState.flat().every((s) => s.isMatched);
        if (won) {
            setHasWon(won);
            setIsPlaying(false);
        }
        setState(newState);
    };
    const handleStartGame = () => {
        setState([]);
        const randomArr = transform2DArr(shuffleArr(response), 4, 3);
        setState(randomArr);
        setSelectedIndexes([]);
        setHasWon(false);
        setIsPlaying(true);
    };
    const handleSelect = (cellIdx: number, rowIdx: number) => () => {
        const newState = structuredClone(state);
        const currentSelected = newState[rowIdx][cellIdx];
        if (selectedIndexes.length < 2) {
            currentSelected.isActive = true;
            const newSelectedArr = [...selectedIndexes, [rowIdx, cellIdx]];
            setSelectedIndexes(newSelectedArr);
            setState(newState);
        }
    };

    useEffect(() => {
        let timer = Infinity;
        if (selectedIndexes.length === 2) {
            timer = setTimeout(evaluateLogic, 200);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [state]); // eslint-disable-line

    const classNames = (cell: Item) => {
        let className = styles.cell;
        if (cell.isActive) {
            className = cn(className, styles.active);
        } else if (cell.isMatched) {
            className = cn(className, styles.matched);
        } else {
            className = styles.cell;
        }
        return className;
    };
    return (
        <div className={styles.mindPuzzle}>
            <div className={styles.grid}>
                {state.map((rows, rowIdx) => {
                    return (
                        <div key={rowIdx} className={styles.row}>
                            {rows.map((cell, cellIdx) => {
                                return (
                                    <div
                                        key={cell.id}
                                        className={classNames(cell)}
                                        onClick={handleSelect(cellIdx, rowIdx)}
                                    >
                                        {(cell.isActive || cell.isMatched) && (
                                            <div className={styles.content}>{cell.content}</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            {(!isPlaying || hasWon) && <Button onClick={handleStartGame}>Start Game</Button>}

            {!isPlaying && hasWon && <p>You Won</p>}
        </div>
    );
};

export default MindPuzzle;
