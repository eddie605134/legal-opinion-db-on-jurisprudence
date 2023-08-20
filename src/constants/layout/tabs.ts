export interface Tab  {
  label: string;
  zIndex: number;
  index: number;
  path: string;
}

export const tabs = [
  { label: "常用見解", zIndex: 4, index: 0, path: "/map" },
  { label: "搜尋見解", zIndex: 3, index: 1, path: "/search" },
  { label: "查詢結果", zIndex: 2, index: 2, path: "/result" },
]; 