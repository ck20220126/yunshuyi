'use client'

import { useState } from 'react'
import Image from 'next/image'
import Tabs from '../components/Tabs'
import DetailCover from '../components/DetailCover'

export default function Info() {
  const [active, setActive] = useState<string>('supplyChain')

  return (
    <div className="pr-sider-padding">
      <DetailCover image="/info-header-bg.webp" title="整合 · 共享 · 创新" subtitle="构建共融共生的供应链商业生态" />
      <div className="px-[11.75%] pt-[130px] pb-[150px]">
        <Tabs
          list={[
            {
              value: 'supplyChain',
              label: '供应链简介',
            },
            {
              value: 'company',
              label: '公司介绍',
            },
          ]}
          active={active}
          onChange={setActive}
        />
        <div className="mt-[30px]">
          {
            {
              'supplyChain': (
                <div>
                  <p>
                    供应链是一个涵盖从原材料采购到最终产品销售给消费者的整个过程的系统，它包括了物流、信息流和资金流的一系列活动和环节。供应链的核心在于将供应商、制造商、分销商直到最终用户连成一个整体的功能网链结构，以实现产品设计、采购、生产、销售、服务等全过程的高效协同。
                  </p>
                  <p className="mt-[1em]">
                    早期的观点认为供应链主要集中在企业内部资源优化领域，如采购、生产、销售等环节的链式联结，主要通过企业资源计划系统的内部供应链来实现。然而，随着全球化的发展和信息技术的进步，供应链的概念已经扩展到了企业外部，包括与供应商、客户以及其他合作伙伴之间的协调和协作。
                  </p>
                  <p className="mt-[1em]">
                    供应链管理（SCM）是通过对供应链中的各个环节进行有效的计划和管理，以提高整个系统的效率和响应速度，降低成本，提升客户满意度为目标的一系列活动。这包括但不限于采购、设计、生产、仓储、运输和分销等活动21。现代供应链管理强调信息共享的重要性，通过信息系统实现产品需求、库存情况、生产计划、物流信息等的信息共享，以减少信息不对称，帮助企业更好地做出决策。
                  </p>
                  <p className="mt-[1em]">
                    供应链不仅是一个物理的物流过程，更是一个涉及信息流、资金流和商流的复杂网络，它的管理和优化对于提高企业的竞争力和效率具有重要意义5619。随着全球经济一体化和信息技术的发展，供应链管理已经成为企业战略规划的重要组成部分，对企业的成功与否起着决定性的作用。
                  </p>
                </div>
              ),
              'company': (
                <div>
                  <p>
                    云南天成科技股份有限公司（以下简称“天成股份”）成立于2009年，是云南省首批获得ISP/ICP/IDC/SP资质的互联网服务企业之一，一直致力于成为区域市场最具品牌影响力的互联网及数据综合服务提供商。
                  </p>
                  <p className="mt-[1em]">
                    天成股份成立以来，持续向客户提供本地化、高品质的IDC、云计算和大数据服务，经过近十年的发展，已成为本省知名的IDC行业领军企业，本地网站备案数多次排名首位。
                    作为本土的高科技企业，天成股份的发展历程获得了社会和行业的高度认可，公司于2015年当选“云南省互联网协会理事单位”，荣获“2017云南省互联网企业价值奖”、“2015年度中国IDC产业优秀服务器托管服务商”、“2015云南省最佳互联网服务企业”、入围“2016年中国互联网行业自律贡献奖”等荣誉称号，并于2015年获得国家高新企业资质认证，2017年被昆明市工业和信息化委员会认定为“昆明市企业技术中心”，2018年被授予AAA信用企业。
                  </p>
                </div>
              ),
            }[active]
          }
        </div>
      </div>
    </div>
  )
}
