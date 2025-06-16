"use client";

import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../../assets/image 5.png';
import image2 from '../../../assets/image 6.png';

export default function Header() {
    return (
        <header className="relative">
            <div className="relative flex h-[500px] w-full">
                <div className="relative h-full" style={{ width: '40%' }}>
                    <Image
                        src={image2}
                        alt="Imagem 1"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>

                <div className="relative h-full" style={{ width: '60%' }}>
                    <Image
                        src={image1}
                        alt="Imagem 2"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>

                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                        clipPath: "polygon(0 0, 50% 0, 70% 100%, 0% 100%)",
                    }}
                />
            </div>
            <div className="absolute top-1/5 left-10 max-w-xl text-white pt-[60px]">
                <p className="text-sm text-gray-300">Planejar | Design | Construção</p>
                <h1 className="text-5xl font-bold mt-4 leading-tight">
                    Construir, trabalhar<br />com qualidade
                </h1>
                <p className="mt-4">
                    Somos uma empresa de <span className="text-red-500 font-semibold">construção civil</span>, especializada em transformar <span className="text-red-500 font-semibold">projetos</span> em realidade com <span className="text-red-500 font-semibold">eficiência</span>.
                </p>
                <Link href="#contato">
                    <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                        Contate-nos
                    </button>
                </Link>
            </div>
        </header>
    );
}