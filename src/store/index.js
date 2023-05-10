import { atom } from "jotai";
import {userFormDefaults} from '../Constants';
export const needDrawer = atom(false);
export const openDrawer = atom(false);
export const userData = atom(userFormDefaults);