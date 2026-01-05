import { useState } from "react";
import PlaygroundShell from "../../playground/PlaygroundShell";
import Card from "../../ui/Card";
import CardTitle from "../../ui/CardTitle";
import ToggleButton from "../../ui/ToggleButton";
import CodePanel from "../../ui/CodePanel";
import { playGroundCode } from "../../assets/playgroundData";

function VisualTreeBad({ click, onClicks }) {
  return (
    <div className="space-y-3">
      <Card className="ring-2 ring-red-400">
        <Card Title>Parent Component</Card>
        <p className="text-xs text-muted">Renders:&nbsp;{click}</p>
      </Card>

      <div className="pl-4 space-y-2">
        <Card className="ring-2 ring-red-400">
          <CardTitle>Child Counter</CardTitle>
          <p className="text-xs text-muted">Renders:&nbsp;{click}</p>
        </Card>

        <Card className="ring-2 ring-red-400">
          <CardTitle>Child Button</CardTitle>
          <button
            onClick={() => onClicks((prev) => prev + 1)}
            className="mt-2 px-3 py-1 text-sm border border-subtle rounded"
          >
            Click ({click})
          </button>
        </Card>
      </div>
    </div>
  );
}

function VisualTreeGood({ click, onClicks }) {
  return (
    <div className="space-y-3">
      <Card>
        <CardTitle>Parent Component</CardTitle>
        <p className="text-xs text-muted">renders:&nbsp; 1 </p>
      </Card>

      <div className="pl-4 space-y-2">
        <Card className="ring-2 ring-green-600">
          <CardTitle>Child Counter</CardTitle>
          <p className="text-xs text-muted">renders: {click}</p>

          <button
            onClick={() => onClicks((prev) => prev + 1)}
            className="mt-2 px-3 py-1 text-sm border border-subtle rounded"
          >
            Click ({click})
          </button>
        </Card>
      </div>
    </div>
  );
}

export default function ComponentRerender() {
  //  states 
  const [mode, setMode] = useState("bad");
  const [clicks, setClicks] = useState(0);
  const { BAD_CODE , BAD_INSIGHT } = playGroundCode[0];
  const { GOOD_CODE , GOOD_INSIGHT} = playGroundCode[1];
  //  console.log( BAD_CODE , "kajfklsdjf", GOOD_CODE)

  return (
    <PlaygroundShell
      title="Component Re-renders"
      description="Understand how state placement affects re-render behavior"
      controls={
        <div className="flex gap-2">
          <ToggleButton
            label="State in Parent (Bad)"
            checked={mode === "bad"}
            onChange={setMode}
          />
          <ToggleButton
            label="State in Child (Good)"
            checked={mode === "good"}
            onChange={setMode}
          />
        </div>
      }
      bad={
        mode === "bad" && <VisualTreeBad click={clicks} onClicks={setClicks} />
      }
      good={
        mode === "good" && (
          <VisualTreeGood click={clicks} onClicks={setClicks} />
        )
      }
      insight={ mode === "bad" ? BAD_INSIGHT : GOOD_INSIGHT}
    >
      <CodePanel
        title={mode === "bad" ? "❌ Bad Code" : "✅ Good Code"}
        code={mode === "bad" ? BAD_CODE : GOOD_CODE}
        highlight="useState(0)"
      />
    </PlaygroundShell>
  );
}
