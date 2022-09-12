import { atom } from "recoil";

export interface SubtitleFormList {
  id: number;
  timeline: string;
  subtitle: string;
}

export const subtitleFormList = atom<SubtitleFormList[]>({
  key: "subtitleFormList",
  default: [],
});
