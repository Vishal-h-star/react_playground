import { useState } from "react";
import "../styles/index.css";
import AdminLayout from "../layout/AdminLayout";
import ComponentRerender from "../playgrounds/componentRerender/ComponentRerender";

export default function App() {
  const [activeId, setActiveId] = useState("component-rerender");

  return (
    <>
      <AdminLayout >
        <ComponentRerender/>
      </AdminLayout>
    </>
  );
}
