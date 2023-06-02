import { Card } from "antd";
import * as React from "react";

export interface IColumnCardProps {
  title: string;
  image: string;
  created_at: string;
  description: string;
  tag: [string];
}

export default function ColumnCard(props: IColumnCardProps) {
  return (
    <Card style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}
