import { Dropdown, Layout, Menu, theme} from "antd";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Icon from "@ant-design/icons";
import ChallengeIcon from '../../../../public/images/icons/icon_challenge.svg';
import MemoIcon from '../../../../public/images/icons/icon_memo.svg';
import InfoIcon from '../../../../public/images/icons/icon_info.svg';
import MenuIcon from '../../../../public/images/icons/icon_menu.svg';

export interface HeaderProps {}

const navItems = [
  {
    icon: <Icon component={MemoIcon} style={{ fontSize: "30px", top: "5px", position:"relative" }}/>,
    label: "my_record",
  },
  {
    icon:  <Icon component={ChallengeIcon} style={{ fontSize: "30px", top: "5px", position:"relative" }}/>,
    label: "challenge",
  },
  {
    icon:  <Icon component={InfoIcon} style={{ fontSize: "30px", top: "5px", position:"relative" }}/>,
    label: "notice",
  },
];

const menuItems = [
  {
    key: 1,
    label: (
      <span>111</span>
    ),
  },
  {
    key: 2,
    label: (
      <span>111</span>
    ),
  },
  {
    key: 3,
    label: (
      <span>111</span>
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
        />
        <div className="grow">
          <Menu
            className="flex justify-end"
            mode="horizontal"
            items={navItems.map((item) => {
              return {
                icon: item.icon,
                key: item.label,
                label: item.label,
              };
            })}
          />
        </div>
      <Dropdown menu={{ items: menuItems}} placement="bottomLeft"  className="ml-8">
        <Icon component={MenuIcon} style={{ fontSize: "30px", position:"relative" }}/>
      </Dropdown>
      </div>
    </Layout.Header>
  );
}

export default Header;
