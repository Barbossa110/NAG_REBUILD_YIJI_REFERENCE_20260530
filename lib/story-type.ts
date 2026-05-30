import type { StoryType } from "@/lib/types";

export function storyTypeLabel(type: StoryType) {
  switch (type) {
    case "interview":
      return "Interview";
    case "press":
      return "Press";
    case "video":
      return "Video";
    case "editorial":
      return "Editorial";
  }
}
