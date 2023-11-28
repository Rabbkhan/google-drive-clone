import {
  Box,
  Button,
  styled,
  Slider,
  Stack,
  MenuItem,
  Menu,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Switch
  
} from "@mui/material";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import ComputerIcon from "@mui/icons-material/Computer";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";
import ReportIcon from "@mui/icons-material/Report";
import AddIcon from "@mui/icons-material/Add";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
// import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import FolderIcon from "@mui/icons-material/Folder";
import MoonIcon from '@mui/icons-material/DarkMode';

// modal import section

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  direction: "column-reverse",
}));
const PlusIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "60px",
  fontFamily: "monospace",
  borderRadius: "20px",
  margin: "5px 5px 20px 5px",
  boxShadow: "1px 2px 3px #afafbf",
  cursor: "pointer",
}));
const Buttons = styled(Box)(({ theme }) => ({
  color: "#1976d2",
  width: "75%",
  borderRadius: "20px",
}));

const Sidebar = ({mode, setMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box bgcolor={'background.default'} color={"text.primary"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block", marginTop:'-10px' } }}
      
    >
      <Icons >
        <PlusIcon bgcolor={'background.default'} color={"text.primary"}>
          <Button variant="none" onClick={(e) => setOpen(true)}>
            <AddIcon /> New
          </Button>
        </PlusIcon>
        <Menu
          sx={{ marginTop: "140px", marginLeft: "20px" }}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClick={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem sx={{ padding: "5px 20px 2px 30px" }}>
            <FolderIcon />
            &nbsp; New folder
          </MenuItem>
          <MenuItem sx={{ padding: "5px 20px 2px 30px" }}>
            <FolderIcon />
            &nbsp; File Upload
          </MenuItem>
          <MenuItem sx={{ padding: "5px 20px 2px 30px" }}>
            <FolderIcon />
            &nbsp; Folder Upload
          </MenuItem>
          <MenuItem sx={{ padding: "5px 20px 2px 30px" }}>
            <FolderIcon />
            &nbsp; Google Docs
          </MenuItem>
          <MenuItem sx={{ padding: "5px 20px 2px 30px" }}>
            <FolderIcon />
            &nbsp; Google Sheets
          </MenuItem>
          <MenuItem sx={{ padding: "5px 20px 2px 30px" }}>
            <FolderIcon />
            &nbsp; Google Slides
          </MenuItem>
          <MenuItem sx={{ padding: "5px 20px 2px 30px" }}>
            <FolderIcon />
            &nbsp; Google Forms
          </MenuItem>
        </Menu>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <MoonIcon/>&nbsp;&nbsp;
              <Switch onChange={e=>setMode(mode ==='light'? 'dark': 'light')}/>
            </ListItemButton>
          </ListItem>
      </Icons>
      <List sx={{marginTop:'-20px'}}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
            <AddToDriveIcon/>&nbsp; &nbsp;

              <ListItemText primary="My Drive"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
          <ComputerIcon/>&nbsp;&nbsp;
              <ListItemText primary="Computers"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
             <ShareIcon/>&nbsp;&nbsp;
              <ListItemText primary="Share with me"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
          <RecentActorsIcon/>&nbsp;&nbsp;
              <ListItemText primary="Recent"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
          <StarIcon/>&nbsp;&nbsp;
              <ListItemText primary="Starred"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
          <ReportIcon/>&nbsp;&nbsp;
              <ListItemText primary="Report"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
          <RestoreFromTrashIcon/>&nbsp;&nbsp;
              <ListItemText primary="Trash"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
          <CloudDownloadIcon/>&nbsp;&nbsp;
              <ListItemText primary="Storage"/>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
            <Slider aria-label="Temperature" defaultValue={30} color="primary"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemText primary="292 MB of 15GB used"/>
            </ListItemButton>
          </ListItem>
         <Buttons  bgcolor={'background.default'} color={"text.primary"} sx={{ border: "1px solid black" }}>
        <Stack spacing={1} direction="row">
          <Button variant="Get More Storage">more Storage </Button>
        </Stack>
      </Buttons>
          
        </List>
     

    </Box>
  );
};

export default Sidebar;
