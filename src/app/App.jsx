import { useState } from "react";
import "../styles/index.css";
import AdminLayout from "../layout/AdminLayout";
import ComponentRerender from "../playgrounds/componentRerender/ComponentRerender";
import StatePlacment from "../playgrounds/stateplacment/StatePlacment";

//  registory Object
const PLAYGROUNDS_MAP = {
  "component-rerender": ComponentRerender,
  "state-placement": StatePlacment,
};
 
export default function App() {
  const [activeId, setActiveId] = useState("component-rerender");
  
   const ActivePlayground = PLAYGROUNDS_MAP[activeId];

  return (
    <>
      <AdminLayout activeId={activeId} onSelect={setActiveId} >
        {/* <ComponentRerender/> */} 
        {ActivePlayground ?  <ActivePlayground/> : null}
      </AdminLayout>
    </>
  );
}
