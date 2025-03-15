import { ChevronLeftRounded } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { DrawerHeader, StyledDrawer } from "./style";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useNavigate } from "react-router-dom";

type MenuDrawerProps = {
  openDrawer: boolean;
  handleDrawerClose: () => void;
};

function MenuDrawer({ openDrawer: open, handleDrawerClose }: MenuDrawerProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" && <ChevronLeftRounded />}
        </IconButton>
      </DrawerHeader>
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton onClick={() => navigate('/cadastros')}
            sx={[
              {
                minHeight: 48,
                px: 2.5,
              },
              open
                ? {
                    justifyContent: "initial",
                  }
                : {
                    justifyContent: "center",
                  },
            ]}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: "center",
                },
                open
                  ? {
                      mr: 3,
                    }
                  : {
                      mr: "auto",
                    },
              ]}
            >
              <EditRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Cadastros"}
              sx={[
                open
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    },
              ]}
            ></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </StyledDrawer>
  );
}

export default MenuDrawer;
