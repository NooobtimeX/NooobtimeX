import { IconType } from "react-icons";

export interface IconInfo {
  name: string;
  icon: IconType; // Direct icon component from react-icons
  description?: string;
}
