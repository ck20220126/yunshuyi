import { AntdRegistry } from '@ant-design/nextjs-registry'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import RootStyleRegistry from './emotion'
import Header from './components/layout/Header'
import Sider from './components/layout/Sider'
import './globals.css'

export const metadata: Metadata = {
  title: '云数驿',
  description: '云数驿',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hans">
      <body className="text-[#1D2129]">
        <AntdRegistry>
          <RootStyleRegistry>
            <div className="max-w-[1920px] w-full mx-auto min-h-dvh relative">
              <Header className="z-10" />
              <main className="max-w-[1920px] w-full mx-auto relative z-0">{children}</main>
              <Sider className="z-20" />
              <footer className="bg-[#f7f8fa] mr-[232px] pt-[50px] pb-[40px] px-[10%] text-[#1D2129] text-[12px]">
                <div className="flex flex-shrink-0">
                  <div>
                    <Image src={'/logo-colorful.png'} width={150} height={50} alt="" />
                    <p className="mt-[20px] flex items-center leading-[20px]">
                      <Image src="/ic-phone-fill.svg" width={16} height={16} alt="" className="mr-[10px]" />
                      <span>400-660-6399</span>
                    </p>
                    <p className="mt-[5px] flex items-center leading-[20px]">
                      <Image src="/ic-map-fill.svg" width={16} height={16} alt="" className="mr-[10px]" />
                      <span>云南·昆明市高新区商院路百大国际派1栋A座32层</span>
                    </p>
                  </div>
                  <div className="w-[1px] h-[146px] bg-[#EBECF0] mx-[70px]" />
                  <div className="flex flex-wrap">
                    <div className="min-w-[150px]">
                      <h4 className="leaing-[24px] text-[16px] font-[500]">关于云数驿</h4>
                      <ul className="mt-[15px] leading-[26px]">
                        <li>
                          <Link href="/info">平台介绍</Link>
                        </li>
                        <li>
                          <Link href="#">平台数据</Link>
                        </li>
                        <li>
                          <Link href="#">联系我们</Link>
                        </li>
                        <li>
                          <Link href="#">投诉反馈</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="min-w-[150px]">
                      <h4 className="leaing-[24px] text-[16px] font-[500]">新闻与媒体</h4>
                      <ul className="mt-[15px] leading-[26px]">
                        <li>
                          <Link href="#">公司新闻</Link>
                        </li>
                        <li>
                          <Link href="#">行业政策</Link>
                        </li>
                        <li>
                          <Link href="#">行业新闻</Link>
                        </li>
                        <li>
                          <Link href="#">媒体聚焦</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="min-w-[150px]">
                      <h4 className="leaing-[24px] text-[16px] font-[500]">平台手册</h4>
                      <ul className="mt-[15px] leading-[26px]">
                        <li>
                          <Link href="#">注册流程</Link>
                        </li>
                        <li>
                          <Link href="#">注册流程</Link>
                        </li>
                        <li>
                          <Link href="#">注册流程</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="min-w-[150px]">
                      <h4 className="leaing-[24px] text-[16px] font-[500]">友情链接</h4>
                      <ul className="mt-[15px] leading-[26px]">
                        <li>
                          <Link href="#">云南天成</Link>
                        </li>
                        <li>
                          <Link href="#">小黄牛</Link>
                        </li>
                        <li>
                          <Link href="#">知百道</Link>
                        </li>
                        <li>
                          <Link href="#">峡谷之星</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-[1px] h-[146px] bg-[#EBECF0] mx-[70px]" />
                  <div className="flex-shrink-0 w-[120px] h-[120px]">
                    <Image src={'/footer-qrcode.png'} width={120} height={120} alt="" />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#EBECF0] mt-[50px]" />
                <div className="mt-[40px] leading-[26px]">
                  <p>版权所有 © 2009-2020 云南天成科技股份有限公司 ALL RIGHTS RESERVED.</p>
                  <p className="flex items-center">
                    <span>滇ICP备11003338号</span>
                    <span className="ml-[10px]">增值电信业务经营许可证号：滇B1、B2-20090035</span>
                    <span className="ml-[20px] inline-flex items-center">
                      <Image src={'/footer-gongan.png'} width={16} height={16} alt="" className="inline-block mr-[5px]" />
                      滇公网安备 53019002000175号
                    </span>
                    <span className="ml-[20px] inline-flex items-center">
                      <Image src={'/footer-wangjian.png'} width={16} height={16} alt="" className="inline-block mr-[5px]" />
                      工商网监
                    </span>
                  </p>
                </div>
              </footer>
            </div>
          </RootStyleRegistry>
        </AntdRegistry>
      </body>
    </html>
  )
}
