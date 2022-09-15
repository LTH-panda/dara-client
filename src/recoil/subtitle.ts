import { Subtitle } from "apis/video";
import { atom } from "recoil";

export interface SubtitleFormList extends Subtitle {}

export const subtitleFormList = atom<SubtitleFormList[]>({
  key: "subtitleFormList",
  default: [],
});
