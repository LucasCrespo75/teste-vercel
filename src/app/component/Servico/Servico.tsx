"use client";

import Image from "next/image";
import { Paintbrush } from "lucide-react";
import bgImage from "../../../assets/image 7.png";
import servicoImg from "../../../assets/image 22.png";

export default function Servicos() {
    const services = [
        {
            title: "Pinturas Especiais",
            desc: "Pinturas especiais para clientes",
            image: servicoImg,
        },
        {
            title: "Revestimentos",
            desc: "Aplicação de revestimentos modernos",
            image: servicoImg,
        },
        {
            title: "Acabamentos",
            desc: "Acabamentos finos e personalizados",
            image: servicoImg,
        },
        {
            title: "Texturas",
            desc: "Texturas para paredes internas e externas",
            image: servicoImg,
        },
        {
            title: "Limpeza Pós-Obra",
            desc: "Serviços de limpeza após construção",
            image: servicoImg,
        },
    ];

    return (
        <section id="servicos" className="relative py-20 px-4 text-white bg-black">
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Construção"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={90}
                    className="opacity-50"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-red-500 text-sm font-semibold tracking-wider">
                        ❚ Nossos Serviços
                    </h3>
                    <h2 className="text-4xl font-bold">Nós Atendemos a Sua Necessidade</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-20">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="relative w-[261.09px] h-[337.51px] rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                style={{ objectFit: "cover" }}
                                className="group-hover:scale-110 transition-transform duration-500"
                            />

                            <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                <svg
                                    viewBox="0 0 261 80"
                                    className="w-full h-[300px]"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="
      M0,52
      C28,40 40,58 52,50
      C74,62 90,48 104,55
      C126,38 146,58 156,50
      C178,64 200,44 208,54
      C230,42 260,60 261,50
      L261,80
      L0,80
      Z"
                                        fill="white"
                                        filter="url(#dropshadow)"
                                    />

                                    <defs>
                                        <filter id="dropshadow">
                                            <feDropShadow dx="0" dy="-3" stdDeviation="4" floodColor="rgba(0,0,0,0.08)" />
                                        </filter>
                                    </defs>
                                </svg>


                                <div className="absolute bottom-0 left-0 w-full px-5 pb-4 flex items-center gap-4 z-10">
                                    <div
                                        className="
      bg-white 
      rounded-full 
      w-10 h-10 
      flex items-center justify-center 
      shadow-[0_4px_6px_rgba(0,0,0,0.3), 0_1px_3px_rgba(0,0,0,0.15)] 
      ring-1 ring-gray-200
      relative
    "
                                        style={{
                                            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                                            bottom: '8px',
                                        }}
                                    >
                                        <Paintbrush size={20} className="text-red-600" />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {service.title}
                                        </h4>
                                        <p className="text-sm text-gray-700">{service.desc}</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                        Mais Serviços
                    </button>
                </div>
            </div>
        </section>
    );
}