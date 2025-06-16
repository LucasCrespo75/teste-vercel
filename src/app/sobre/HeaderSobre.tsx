"use client";

import Link from 'next/link';
import Image from 'next/image';
import bgHero from '../../assets/image-sobre.png'; // nova imagem que você enviou

export default function Header() {
    return (
        <header className="relative w-full h-[600px]">
            {/* Imagem de fundo */}
            <Image
                src={bgHero}
                alt="Equipe reunida"
                fill
                className="object-cover"
                priority
            />

            {/* Sobreposição escura */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Conteúdo sobreposto */}
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
                <div className="text-white max-w-2xl space-y-4">
                    <p className="text-base text-gray-200">
                        Eficiência | Clareza e resultado em cada etapa da construção.
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Quem somos é o que<br /> entregamos
                    </h1>
                    <p className="text-lg">
                        Somos líderes em transformar projetos em conquistas reais para você.
                    </p>
                    <Link href="#contato">
                        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">
                            Contate-nos
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
