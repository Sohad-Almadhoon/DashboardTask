import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, IconButton, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import PersonIcon from "@mui/icons-material/Person";
import TranslateIcon from "@mui/icons-material/Translate";
import { useStateContext } from "../../context";
import useData from "../../hooks/useData";
import { UserInfoData } from "../../types";

export default function SideBar() {
  const { state, setState } = useStateContext();
  const { data: userData } = useData<UserInfoData>("/data/user.json");
  const list = () => (
    <Box sx={{ width: 250 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}>
        <Typography>Logo</Typography>
        <IconButton>
          <KeyboardDoubleArrowLeftIcon onClick={() => setState(false)} />
        </IconButton>
      </Box>
      <Box display="flex" gap={3} alignItems="center" p={2}>
        <img src={userData?.user.img} alt="Patient" width={50} height={50} />
        <Box>
          <Typography variant="body2" fontWeight={700}>
            {userData?.user.username}
          </Typography>
          <Typography variant="body2" color="GrayText">
            {userData?.user.role}
          </Typography>
        </Box>
      </Box>
      <List>
        <Typography
          sx={{ padding: 1, fontSize: 13, fontWeight: 600, marginLeft: 2 }}>
          GENERAL
        </Typography>
        <ListItem disableGutters>
          <ListItemButton>
            <ListItemIcon>
              <TextSnippetIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontSize={15} color="#777">
                  Offers
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          {" "}
          <ListItemButton>
            <ListItemIcon>
              <PointOfSaleIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontSize={15} color="#777">
                  Templates
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          {" "}
          <ListItemButton>
            <ListItemIcon>
              <FreeBreakfastIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontSize={15} color="#777">
                  Sections
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <Typography
          sx={{ padding: 1, fontSize: 13, fontWeight: 700, marginLeft: 2 }}>
          MOBILE APP
        </Typography>{" "}
        <ListItem disableGutters>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontSize={15} color="#777">
                  App Users
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          {" "}
          <ListItemButton>
            <ListItemIcon>
              <TranslateIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontSize={15} color="#777">
                  Strings
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <Typography
          sx={{ padding: 1, fontSize: 13, fontWeight: 700, marginLeft: 2 }}>
          TWILIO
        </Typography>
        <ListItem disableGutters>
          {" "}
          <ListItemButton>
            <ListItemIcon>
              {" "}
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontSize={15} color="#777">
                  Machine Caller
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <Typography
          sx={{ padding: 1, fontSize: 13, fontWeight: 700, marginLeft: 2 }}>
          SETTINGS
        </Typography>
        <ListItem disableGutters>
          {" "}
          <ListItemButton>
            <ListItemIcon>
              {" "}
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontSize={15} color="#777">
                  Users
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={state}
      hideBackdrop
      variant="persistent"
      sx={{
        width: state ? 250 : 0,
        transitionDuration: 0,
        position: {
          xs: "absolute",
          md: "unset",
        },
      }}
      onClose={() => setState(false)}>
      {list()}
    </Drawer>
  );
}
