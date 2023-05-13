import { styled } from "@mui/material/styles";
import {
  Button,
  Card 
} from "@mui/material";
import { green } from "@mui/material/colors";

export const AppButton = styled(Button)(({ pill }) => ({
    borderRadius: pill ? 50 : 4,
    fontSize: 10,
    size: "small",
    boxSizing: "inherit",
    backgroundColor: green[500]
  }));

export const AppCard = styled(Card)(({}) => ({
  borderRadius: 10,
  borderColor: green[500],
  fontSize: 10,
  size: "small",
  border: 1,
  marginBottom: 10
}));