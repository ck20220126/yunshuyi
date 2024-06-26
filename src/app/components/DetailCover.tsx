import Image from 'next/image'

export default function DetailCover(props: { image: string; title?: string; subtitle?: string }) {
  return (
    <div className="h-[850px] relative text-white">
      <Image src={props.image} fill alt="" className="object-cover" />
      <div className="absolute bottom-0 left-0 right-0 pb-[150px] px-[11.75%]">
        <h1 className="leading-[92px] text-[66px] font-bold">{props.title}</h1>
        <p className="mt-[15px] leading-[28px] text-[20px]">{props.subtitle}</p>
      </div>
    </div>
  )
}
