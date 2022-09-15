import { atom } from "recoil";

export const videoCurrentTime = atom<string>({
  key: "videoCurrentTime",
  default: "",
});

export const videoCurrentSubtitle = atom<string>({
  key: "videoCurrentSubtitle",
  default: "",
});

export const videoIsPause = atom<boolean>({
  key: "videoIsPause",
  default: true,
});
