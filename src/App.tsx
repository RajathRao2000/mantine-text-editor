import { MantineProvider } from "@mantine/core";
import TextEditor from "./TextEditor";
function App() {
  return (
    <MantineProvider>
      <TextEditor />
    </MantineProvider>
  );
}

export default App;
