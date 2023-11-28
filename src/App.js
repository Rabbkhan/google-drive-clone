import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
// import Mydrive from './pages/Mydrive'
// import Computer from './pages/Computes'
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={"text.primary"}>
        <Navbar onMenuClick={toggleSidebar} />
        <Stack direction="row" spacing={2} justifyContent="space-around">
          <Sidebar setMode={setMode} mode={mode} isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <Feed />
        </Stack>
          <Footer/>

        {/* <Router>
          <Routes>
            <Route exact path="/" component={<Mydrive/>} />
            <Route path="/computer" component={<Computer/>} />
          </Routes>
        </Router> */}
      </Box>
    </ThemeProvider>
  )
}

export default App;
