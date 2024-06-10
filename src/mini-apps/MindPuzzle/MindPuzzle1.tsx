import mindPuzzleData from "@/assets/data/mind-puzzle.json";
import { cn } from "@/lib/utils";
import { MouseEvent, useMemo, useState } from "react";

type SelectedPair = {
    [key: string]: string[];
};

const MindPuzzle1 = () => {
    const [selectedPairs, setSelectedPairs] = useState<SelectedPair | undefined>();
    const [tempPair, setTempPair] = useState<SelectedPair | undefined>();
    const sortedData = useMemo(() => mindPuzzleData.sort(() => Math.random() - 0.5), []);

    const size = mindPuzzleData.length;

    if (size % 2 !== 0) {
        console.log("Please provide even data set");
        return null;
    }

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (!(e.target instanceof HTMLDivElement)) return;

        const clickedId = e.target.dataset.id;
        const clickedContent = e.target.dataset.content;

        if (!clickedId || !clickedContent) return;

        if (!tempPair?.[clickedContent]) {
            const tempSize = Object.keys(tempPair ?? {}).length;
            if (tempSize === 0) {
                setTempPair({ [clickedContent]: [clickedId] });
            } else if (tempSize === 1) {
                setTempPair({ ...tempPair, [clickedContent]: [clickedId] });
                setTimeout(() => setTempPair(undefined), 200);
            }
            return;
        }

        setSelectedPairs({
            ...selectedPairs,
            [clickedContent]: [...tempPair[clickedContent], clickedId],
        });
        setTempPair(undefined);
    };

    return (
        <div className="flex justify-center pt-5">
            <div
                className="grid w-max gap-3"
                style={{ gridTemplateColumns: `repeat(${size / 3}, 1fr)` }}
                onClick={handleClick}
            >
                {sortedData.map((item) => {
                    const tempVisible = tempPair?.[item.content]?.includes(item.id);
                    const visible = selectedPairs?.[item.content]?.includes(item.id);
                    return (
                        <div
                            key={item.id}
                            data-id={item.id}
                            data-content={item.content}
                            className={cn(
                                "flex size-36 cursor-pointer items-center justify-center rounded border hover:bg-gray-200",
                                tempVisible && "bg-gray-400",
                                visible && "bg-green-400",
                            )}
                        >
                            {(tempVisible || visible) && <p className="text-3xl">{item.content}</p>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MindPuzzle1;
