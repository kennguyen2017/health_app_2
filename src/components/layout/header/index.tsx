import { Dropdown, Layout, Menu, theme} from "antd";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Icon from "@ant-design/icons";
import ChallengeIcon from '../../../../public/images/icons/icon_challenge.svg';
import MemoIcon from '../../../../public/images/icons/icon_memo.svg';
import InfoIcon from '../../../../public/images/icons/icon_info.svg';
import MenuIcon from '../../../../public/images/icons/icon_menu.svg';
import DropdownButton from "antd/es/dropdown/dropdown-button";
//import './header.css';
export interface HeaderProps {}

const navItems = [
  {
    icon: <Icon component={MemoIcon} style={{ fontSize: "30px", top: "5px", position:"relative" }}/>,
    label: "自分の記録",
  },
  {
    icon:  <Icon component={ChallengeIcon} style={{ fontSize: "30px", top: "5px", position:"relative" }}/>,
    label: "チャレンジ",
  },
  {
    icon:  <Icon component={InfoIcon} style={{ fontSize: "30px", top: "5px", position:"relative" }}/>,
    label: "お知らせ",
  },
];

const menuItems = [
  {
    key: 1,
    label: (
      <span style={{color:"#FFFFFF", background:"#777777",width:"280px",height:"72px"}}>自分の記録</span>
    ),
  },
  {
    key: 2,
    label: (
      <span style={{color:"#FFFFFF", background:"#777777",width:"280px",height:"72px"}}>体重グラフ</span>
    ),
  },
  {
    key: 3,
    label: (
      <span style={{color:"#FFFFFF", background:"#777777",width:"280px",height:"72px"}}>目標</span>
    ),
  },
  {
    key: 4,
    label: (
      <span style={{color:"#FFFFFF", background:"#777777",width:"280px",height:"72px"}}>選択中のコース</span>
    ),
  },
  {
    key: 5,
    label: (
      <span style={{color:"#FFFFFF", background:"#777777",width:"280px",height:"72px"}}>コラム一覧</span>
    ),
  },
  {
    key: 6,
    label: (
      <span style={{color:"#FFFFFF",background:"#777777",width:"280px",height:"72px"}}>設定</span>
    ),
  },
];

export function Header(props: HeaderProps) {
  const { t } = useTranslation("header");
  

  // const {
  //   components: {
  //     Layout: {
  //       colorTextBase
  //     },
  // } = theme.useToken();

  return (
    <Layout.Header className="header align-middle flex">
      <div className="flex items-center justify-between w-full">
        <Image
          alt="Icon English"
          src="/images/logo.svg"
          width={144}
          height={64}
          text-inline="a"
        />
        <div className="grow">
          <Menu
            className="flex justify-end"
            mode="horizontal"
            items={navItems.map((item) => {
              return {
                icon: item.icon,
                //key: item.key,
                label: item.label,
              };
            })}
          />
        </div>
        <Dropdown menu={{items: menuItems }} placement="bottomLeft" overlayStyle={{color:"blue"}} >
          <Icon component={MenuIcon} style={{ fontSize: "30px", position:"relative" }}/>
        </Dropdown>
      </div>
    </Layout.Header>
  );
}

export default Header;
