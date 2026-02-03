import { SocialPlatform } from "@/enum";
import { IconType } from "react-icons";

// Social link interface
export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon: IconType;
  username?: string;
}
