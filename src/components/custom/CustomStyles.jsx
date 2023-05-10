import { styled } from "@mui/material/styles";
import {
  Button,
  Card, 
  CardContent
} from "@mui/material";
import { green } from "@mui/material/colors";

export const AppButton = styled(Button)(() => ({
    borderRadius:4,
    fontSize: 15,
    size: "small",
    boxSizing: "inherit",
    backgroundColor: green[500],
    margin:'auto'
  }));

export const AppCard = styled(Card)(({}) => ({
  borderRadius: 2,
  borderColor: green[500],
  fontSize: 15,
  size: "small",
  border:1,
  padding: 2,
  margin:'auto',
  justifyContent: "center",
  flexGrow:1,
}));

export const AppCardContent = styled(CardContent)(({}) => ({
  border: 1,
  borderRadius: 2,
  justifyContent: "center",
  margin:2,

}));