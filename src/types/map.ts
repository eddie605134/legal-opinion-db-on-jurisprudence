// 通用類型定義
export interface ResType<T> {
  code: string;
  message: string;
  content: T
}

// --------------------------------
export type CurtType = {
  court: string;
  num_juds: number;
  num_opinions: number;
  common_opinion1: string;
  common_opinion2: string;
  common_opinion3: string;
  common_opinion4: string;
  common_opinion5: string;
}

export type ResCurtType = {
  data: CurtType[];
}

export type OpinionType = {
  court: string;
  jud_date: string;
  jud_url: string;
  case_num: string;
  opinion: string;
}

export type ResOpinionType = {
  query_text: string;
  data: OpinionType[];
}
