import React from "react";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  Button,
  InputLabel,
  Avatar,
} from "@mui/material";
import styled from "styled-components";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import BorderInnerIcon from "@mui/icons-material/BorderInner";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import SwitchAccessShortcutIcon from "@mui/icons-material/SwitchAccessShortcut";
import FolderIcon from "@mui/icons-material/Folder";
import WebIcon from "@mui/icons-material/Web";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DownloadIcon from '@mui/icons-material/Download';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { green } from '@mui/material/colors';

const color = green[500];

const Dropdown = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "10px",
}));
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}));
const Root = styled("div")(
  ({ theme }) => `
  table { font-family: IBM Plex Sans, sans-serif; font-size: 0.875rem; border-collapse: collapse;width: 100%; color:#5f6368;}
  td,th { text-align: left; padding: 15px;  border-bottom: 1px solid #5f6368;}
  td{  text-align:left; } th { background-color: #fff};} `
);
const IconAdjustment = styled(Box)(({ theme }) => ({
  display: "flex",
  direction: "column-reverse",
  alignItems: "center",
  gap: "10px",
}));

const Feed = () => {
  return (
    <Box bgcolor={'background.default'} color={"text.primary"} flex={5} p={2}>
      <Wrapper>
        <FormControl>
          <Dropdown>
            <InputLabel id="Choose-file-type">Type</InputLabel>
            <Select
              label="type"
              sx={{ width: "120px", height: "33px", borderRadius: "8px" }}>
              <MenuItem>
                  <em>
                  <IconAdjustment>
                    <DocumentScannerIcon/>
                    Documents
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
          
                  <em>
                <IconAdjustment>
                    <BorderInnerIcon />
                    Spredsheets
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
          
                  <em>
                <IconAdjustment>
                    <PresentToAllIcon/>
                    Presentations
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
          
                  <em>
                <IconAdjustment>
                    <FormatListBulletedIcon/>
                    Forms
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
          
                  <em>
                <IconAdjustment>
                    <PhotoSizeSelectActualIcon/>
                    Photos & images
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
          
                  <em>
                <IconAdjustment>
                    <PictureAsPdfIcon/>
                    PDFs
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
          
                  <em>
                <IconAdjustment>
                    <VideoCameraFrontIcon/>
                    Vidoes
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
 
                  <em>
                <IconAdjustment>
                    <SwitchAccessShortcutIcon/>
                    Shorcuts
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
                  <em>
                <IconAdjustment>
                    <FolderIcon/>
                    Folders
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
               <em>
                <IconAdjustment>
                    <WebIcon />
                    Sites
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
                  <em>
                <IconAdjustment>
                    <AudiotrackIcon />
                    Audio
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
                  <em>
                <IconAdjustment>
                    <ArchitectureIcon />
                    Drawings
                </IconAdjustment>
                  </em>
              </MenuItem>
              <MenuItem>
                  <em>
                <IconAdjustment>
                    <FolderZipIcon />
                    Achives(zip)
                </IconAdjustment>
                  </em>
              </MenuItem>
              <Button>Cancel</Button>
              <Button>Apply</Button>
            </Select>
          </Dropdown>
        </FormControl>
        <FormControl fullWidth>
          <Dropdown>
            <InputLabel id="Choose-file-Modified">Modified</InputLabel>
            <Select
              label="Modified"
              sx={{ width: "120px", height: "33px", borderRadius: "8px" }}
            >
              <MenuItem>
                <em>Today</em>
              </MenuItem>
              <MenuItem>
                <em>Last 7 days</em>
              </MenuItem>
              <MenuItem>
                <em>Last 30 days</em>
              </MenuItem>
              <MenuItem>
                <em>This year (2023)</em>
              </MenuItem>
              <MenuItem>
                <em>Last year (2022)</em>
              </MenuItem>
              <MenuItem>
                <em>Custom date range </em>
              </MenuItem>
              <Button>Cancel</Button>
              <Button>Apply</Button>
            </Select>
          </Dropdown>
        </FormControl>
      </Wrapper>

      {/* table adding here  */}

      <Root sx={{ maxWidth: "100%", width: 500 }}>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Last Modified</th>
              <th>File Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <IconAdjustment>
                  <FolderCopyIcon /> &nbsp;Name
                </IconAdjustment>
              </td>
              <td style={{ width: 180 }}>
                <IconAdjustment>
                  <Avatar sx={{ width: 30, height: 30 }} />
                  me
                </IconAdjustment>
              </td>
              <td style={{ width: 190 }}> Apr 4, 2020 me</td>
              <td style={{ width: 170 }}> ---- </td>
              <td style={{ width: 170 }}> <IconAdjustment><PersonAddAltIcon/><DownloadIcon/><DriveFileRenameOutlineIcon/><StarBorderIcon/> <MoreVertIcon /></IconAdjustment>
</td>
              
            </tr>
          </tbody>
          <tfoot>
            <tr> </tr>
          </tfoot>
        </table>
      </Root>
    </Box>
  );
};

export default Feed;
