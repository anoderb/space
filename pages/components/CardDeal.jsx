import Image from "next/image";
import { card } from "@/public/assets";
import {Button} from "@/pages/components";
import React from 'react'

export default function CardDeal() {
  return (
    <section className={'section'}>
    <div className={'sectionInfo'}>
      <h2 className={'heading2'}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`paragraph max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={'sectionImg'}>
      <Image src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  )
}
