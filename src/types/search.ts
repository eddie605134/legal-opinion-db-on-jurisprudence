// 通用類型定義
export interface ResType<T> {
  code: string;
  message: string;
  content: T
}

// --------------------------------
export type GenerationKeywordType = {
  keyword: string;
}

export type ResGenKeywordType = {
  data: GenerationKeywordType[];
}

export type GenerationOpinionType = {
  opinion: string;
}

export type ResGenOpinionType = {
  data: GenerationOpinionType[];
}