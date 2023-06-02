import { Dropdown, Layout, Menu } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export interface HeaderProps {}

const items = [
  {
    url: "",
    label: "my_record",
  },
  {
    url: "",
    label: "my_record",
  },
  {
    url: "",
    label: "my_record",
  },
];

export function Footer(props: HeaderProps) {
  const { t } = useTranslation("header");

  return (
    <Layout.Footer className="header align-middle flex">
      <div className="flex items-center justify-between w-full">
        <div className="grow">
          {items.map((item, index) => {
            return (
              <Link key={index} href={item.url} prefetch={false}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </Layout.Footer>
  );
}

export default Footer;
