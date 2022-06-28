import "./App.css";
import Home from "./component/Home";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { borderRadius } from "@mui/system";
import New from "./component/New";
import RichTextEditor from "./component/RichTextEditor";
import { useState } from "react";
import RTEWithDraft from "./component/RTEWithDraft";

const config = {
  buttons: ["bold", "italic"],
};

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          sx={{ height: "100vh" }}
        >
          <div className="container">
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              SignUP Form
            </h3>
            {/* <Home /> */}
            <New />
            <RichTextEditor setValue={setValue} config={config} />
            <div>{value}</div>
            <RTEWithDraft />
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
