export const playGroundLinks = [
  {
    id: "component-rerender",
    title: "Component Re-renders",
    subtitle: "Why re-renders happen",
  },
  {
    id: "state-placement",
    title: "State Placement",
    subtitle: "Where state should live",
  },
];

export const playGroundCode = [
  {
    BAD_CODE: `function Parent() {
  const [count, setCount] = useState(0); // ❌ state in parent
 
  return (
    <Child  />
  );

  function Child(){
     <button onClick{ () => setCount(count + 1)}> {count} </button>
  }

}`,
  BAD_INSIGHT :
  "State is stored in the parent component. When state changes it triggers a re-render.  Every click updates parent state, so the parent and all its children re-render"
  },
  {
    GOOD_CODE: `function Parent() {
  return <Child />; // ✅ no state here
}

function Child() {
  const [count, setCount] = useState(0); // ✅ state in child

  <button onClick{ () => setCount(count + 1)}> {count} </button>
}` , 
 GOOD_INSIGHT :
  "State is scoped to the child component. When state changes it triggers a re-render. Clicking only updates the child, so the parent stays stable"

  }
];



