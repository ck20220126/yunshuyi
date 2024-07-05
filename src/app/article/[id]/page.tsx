'use client'

import Breadcrumb from '@/app/components/Breadcrumb'
import Divider from '@/app/components/Divider'

const data = {
  title: '关于用友畅捷通T+13和T+16系统的安全防护公告',
}

export const runtime = 'edge';

export default function Article() {
  return (
    <div className="pr-[232px] pb-[150px]">
      <div className="mt-[10px] mx-[11.75%] py-[20px] border-b border-[#EBECF0]">
        <Breadcrumb
          list={[
            { title: '首页', link: '/' },
            { title: '新闻媒体', link: '/news' },
            { title: '文章详情' },
          ]}
        />
      </div>
      <div className="mt-[50px] px-[15.5%]">
        <h1 className="leading-[44px] text-[36px] font-bold">{data.title}</h1>
        <div className="mt-[40px] leading-[30px] text-[16px]">
          <p>
            近期，我们注意到用友畅捷通T+系列软件存在 SQL注入漏洞(QVD-2023-13612)反序列化漏洞(QVD-2023-13615)，且漏洞相关技术细节已在互联网上公开，风险系数较高，建议使用用友T+系列软件尽快进行漏洞修补。
          </p>
          <br />
          <img src="/new-img1.webp" style={{ width: '100%' }} />
          <br />
          <p>
            <span className="font-bold">1.1 漏洞描述</span>
          </p>
          <p>畅捷通T+系统中存在SQL注入漏洞，远程未授权攻击者可利用此漏洞在目标系统执行任意SQL语句，最终实现远程命令执行。</p>
          <p>畅捷通 T+前台存在不安全的反序列化漏洞，未经过身份认证的攻击者可以通过构造恶意的请求在目标服务器上执行任意命令。</p>
          <p>
            <span className="font-bold">1.2 漏洞编号</span>
          </p>
          <p>QVD-2023-13612</p>
          <p>QVD-2023-13615</p>
          <p>
            <span className="font-bold">1.3 漏洞等级</span>
          </p>
          <p>高危</p>
          <p>
            <span className="font-bold">1.4 受影响版本</span>
          </p>
          <p>畅捷通 T+ 13.0</p>
          <p>畅捷通 T+ 16.0</p>
          <p>
            <span className="font-bold">1.5 修复建议</span>
          </p>
          <p>联系您的软件供应商获得技术支持，确认当前使用的版本是否受影响，并对受影响系统进行升级或补丁更新。</p>
          <p>目前官方已发布补丁更新，建议受影响用户尽快修补漏洞：</p>
          <p>T+ 13补丁包：</p>
          <p>
            <a href="https://www.chanjetvip.com/product/goods/detail?id=5c4e9022a070eb00134deb99">https://www.chanjetvip.com/product/goods/detail?id=5c4e9022a070eb00134deb99</a>
          </p>
          <p>T+ 16补丁包：</p>
          <p>
            <a href="https://www.chanjetvip.com/product/goods/detail?id=6077e91b70fa071069139f62">https://www.chanjetvip.com/product/goods/detail?id=6077e91b70fa071069139f62</a>
          </p>
        </div>
      </div>
    </div>
  )
}
