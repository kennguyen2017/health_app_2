import { Card , Image,  } from "antd";
import React, { useState, useEffect } from "react";
import { Card, Image, Time, Tag } from "antd";

export interface IColumnCardProps {
  title: string;
  image: string;
  time: string;
  description: string;
  tag: [string];
}


const Column = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [time, setTime] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    // Get the image URL, time, and tag from an API.
    const response = await fetch("url");
    const data = await response.json();
    setImageUrl(data.imageUrl);
    setTime(data.time);
    setTag(data.tag);
  }, []);

  return (
    <Card>
      <Image src={imageUrl} />
      <Time>{time}</Time>
      <Tag>{tag}</Tag>
    </Card>
  );
};

export default Column;
