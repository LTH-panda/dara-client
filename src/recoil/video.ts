import { atom } from "recoil";

export const videoCurrentTime = atom<string>({
  key: "videoCurrentTime",
  default: "",
});
