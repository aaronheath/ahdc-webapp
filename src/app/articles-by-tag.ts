import {Article} from "./article";

export interface ArticlesByTag {
  [propName: string]: Article[];
}
