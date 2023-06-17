import Image from "next/image";
import { bill} from "@/public/assets/";
import React from 'react'

export default function Billing() {
  return (
    <section id="product" className={'sectionReverse'}>
    <div className={'sectionImgReverse'}>
      <Image src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={'sectionInfo'}>
      <h2 className={'heading2'}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`paragraph max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>
    </div>
  </section>
  )
}

