'use client'
import { useState } from "react";
import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import Divider from "./components/Divider";
import DetailButton from "./components/DetailButton";
import ColumnSwiper from "./components/ColumnSwiper";

export default function Home() {
  const [banners] = useState([
    {
      url: 'https://s2.loli.net/2024/06/01/Cs4wlqAtOcTjrYI.png',
      // title: '智能化供应链，引领数字化时代',
      // subtitles: ['数智化大宗商品集采・集售', '供应链金融服务', '供应链仓储物流']
    },
    {
      url: 'https://s2.loli.net/2024/06/01/8EtuqaOzbUJyefY.png',
      // title: '智能化供应链，引领数字化时代',
      // subtitles: ['数智化大宗商品集采・集售', '供应链金融服务', '供应链仓储物流']
    }
  ])
  return (
    <div className="min-h-screen">
      <HomeBanner list={banners} className="w-full h-dvh" />
      {/* content start */}
      <div className="pr-[232px]">
        <div className="py-[100px] px-[10%]">
          <div className="flex justify-center">
            <div className="flex">
              <div className="w-[300px] h-[500px] relative">
                <Image src={"/one-img1.png"} alt="" fill className="object-cover" />
              </div>
              <div className="w-[300px] h-[500px] relative ml-[30px] mt-[100px]">
                <Image src={"/one-img2.png"} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="ml-[150px] mt-[100px]">
              <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Supply Chain</p>
              <p className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">共建 · 共享 · 共赢<br/>构建共融共生的供应链商业生态</p>
              <Divider className="my-[30px]" />
              <p className="text-[#4e5969] leading-[28px] text-[16px]">供应链是指在产品或服务从原材料采购到最终消费者手中的整个过程中，涉及到的物流、信息流和资金流的一系列活动和环节。包括了将产品从供应商送到消费者的整个链条，涵盖了生产及流通过程中，涉及将产品或服务提供给最终用户活动的上游与下游企业所形成的网链结构。</p>
              <DetailButton className="mt-[50px]">查看详情</DetailButton>
            </div>
          </div>
          {/* <Image src={"/one-bg.png"} alt="" fill className="absolute w-full h-full object-cover" /> */}
        </div>
        <ColumnSwiper />
      </div>
    </div>
  );
}
