import { Dropdown, Layout, Menu } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";
//import './footer.css';
export interface FooterProps {}

const items = [
  {
    url: "",
    label: "会員登録",
  },
  {
    url: "",
    label: "運営会社",
  },
  {
    url: "",
    label: "利用規約",
  },
  {
    url: "",
    label: "個人情報の取扱について",
  },
  {
    url: "",
    label: "特定商取引法に基づく表記",
  },
  {
    url: "",
    label: "お問い合わせ",
  },
];
//className="flex items-center justify-between w-full
export function Footer(props: FooterProps) {
  const { t } = useTranslation("footer");

  return (
    <Layout.Footer>
      
        <div className="grow" style={{background: '#414141',
              height: '128px',
              color: '#FFFFFF',
              margin: 15,
              //margin-left: 10
              }}
        >
          <Menu 
          className="flex items-center justify-between w-full"
          style={{fontSize: "11px", top: "48px", position:"relative"}}
          mode="horizontal"
          items = {items.map((item) => {
              return {
                //url: {item.url},
                label: item.label,
              };
            })}
          />
        </div>
      
    </Layout.Footer>
  );
}

export default Footer;
