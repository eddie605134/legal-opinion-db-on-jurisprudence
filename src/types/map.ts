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
  common_opinion_index1: string;
  common_opinion_index2: string;
  common_opinion_index3: string;
  common_opinion_index4: string;
  common_opinion_index5: string;
  common_opinion_topic1: string;
  common_opinion_topic2: string;
  common_opinion_topic3: string;
  common_opinion_topic4: string;
  common_opinion_topic5: string;
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
  distance: string;
  order_index: string;
  csv_index?: string;
}

export type ResOpinionType = {
  query_text: string;
  data: OpinionType[];
}
