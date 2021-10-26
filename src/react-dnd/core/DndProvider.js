import { createDragDropManager } from "../../dnd-core";
import DndContext from "./DndContext";
function DndProvider({backend, children}) {
  let value = {dragDropManager: createDragDropManager(backend)}

  return(
    <DndContext.Provider value={value}>
      {children}
    </DndContext.Provider>
  )
}

export default DndProvider