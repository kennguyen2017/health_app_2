import { Layout, Spin } from "antd";
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Spin spinning={false} tip="Đang tải...">
      <Layout className={"layout"}>
        <Header></Header>
        <Layout>
          <Layout>
            <Layout.Content className="p-3.5 min-h-screen">
              <div>{children}</div>
            </Layout.Content>
          </Layout>
        </Layout>
        <Footer></Footer>
      </Layout>
    </Spin>
  );
}

export default React.memo(AppLayout);
