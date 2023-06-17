
import Image from "next/image";
import {
  airbnb,
  binance,
  coinbase,
  dropbox,
} from "@/public/assets";



import React from 'react'

export default function Clients() {
  const clients = [
    {
      id: "client-1",
      logo: airbnb,
    },
    {
      id: "client-2",
      logo: binance,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: dropbox,
    },
  ];
  return (
    <section className={`flexCenter my-4`}>
    <div className={`flexCenter flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 flexCenter sm:min-w-[192px] min-w-[120px] m-5`}>
          <Image src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
  )
}
