import * as React from "react";
import ColumnCard from "@/components/column-card";

export interface IColumnProps {}

const data = [
  {
    title: "コラムサムネイル用パーツ",
    image: "string",
    created_at: "string",
    description: "コラムサムネイル用パーツ",
    tag: ["魚料理", "和食", "DHA"],
  },
];
export default function Column(props: IColumnProps) {
  return (
    <div>
      {data.map((item, index) => {
        return <ColumnCard key={index} {...item}></ColumnCard>;
      })}
    </div>
  );
}

