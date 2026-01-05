

export default function PlaygroundShell({
  title,
  description,
  controls,
  bad,
  good,
  insight,
  children
}) {

   const  details = insight?.split('.')
  return (
    <div className="bg-card border border-subtle rounded-xl p-6 space-y-6">

      {/* Header */}
      <header>
        <h2 className="text-xl font-semibold mb-1">
          {title}
        </h2>
        <p className="text-muted text-sm">
          {description}
        </p>
      </header>

      {/* Controls */}
      {controls && (
        <section className="border border-subtle rounded-lg p-4">
          {controls}
        </section>
      )}

      {/* Comparison */}
      <section className="grid grid-cols-2 gap-4">
        {/* Bad */}
        <div className="border border-subtle rounded-lg p-4">
          <div className="text-bad font-medium mb-2">
            ❌ Bad Architecture
          </div>
          {bad}
        </div>

        {/* Good */}
        <div className="border border-subtle rounded-lg p-4">
          <div className="text-good font-medium mb-2">
            ✅ Good Architecture
          </div>
          {good}
        </div>
      </section>

       {children}

      {/* Insight */}
      {details.map( (line , i ) => (
        <p className="text-muted text-[1rem]  mb-1.5 pl-4">
            <span> <b>{i+1}.</b> { line}.</span>
        </p> 
      ))}
    </div>
  );
}
