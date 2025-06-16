"use client";

import Link from 'next/link';
import Image from 'next/image';

// --- Importação da Imagem ---
// É crucial que este caminho esteja correto.
// Se sua imagem 'image 9.png' está em 'src/assets/', use:
import image9 from '@/assets/image 9.png';

// Se sua imagem 'image 9.png' está em 'public/assets/', use o caminho direto como string:
// const image9 = '/assets/image 9.png';


export default function HeaderServico() {
    return (
        <header className="relative w-full overflow-hidden">
            {/* Container principal para a imagem e seu overlay */}
            <div className="relative h-[500px] w-full">
                {/* A imagem única que se estende de ponta a ponta */}
                <Image
                    src={image9}
                    alt="Panorama de construção com foco em qualidade" // Alt text mais descritivo
                    fill // A imagem preenche o div pai (w-full, h-[500px])
                    style={{ objectFit: "cover" }} // Garante que a imagem cubra sem distorcer
                    priority // Indica que esta é uma imagem de alta prioridade para carregamento rápido
                    sizes="100vw" // Ocupa 100% da largura da viewport
                    className="absolute inset-0" // Garante que ela cubra todo o espaço
                />

                {/* Overlay poligonal com gradiente para um visual mais sofisticado */}
                {/* Este div cria a área escura e poligonal onde o texto se destacará */}
                <div
                    className="absolute inset-0 pointer-events-none" // pointer-events-none para permitir cliques abaixo
                    style={{
                        // Gradiente que desvanece de escuro para transparente, criando profundidade
                        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                        // O clipPath original que escurece a área onde o texto está
                        clipPath: "polygon(0 0, 50% 0, 70% 100%, 0% 100%)",
                    }}
                />
            </div>

            {/* Textos sobrepostos - Posicionamento e Estilização */}
            <div className="absolute top-1/5 left-10 max-w-xl text-white pt-[60px] z-10">
                <p className="text-sm text-[#C02141]">Agilidade | Organização</p>
                <h1 className="text-5xl font-bold mt-4 leading-tight text-[#C02141]" // Cor do título ajustada para #C02141
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} // Sombra para o texto para melhor legibilidade
                >
                    Temos a maior <br />variedade de Serviços
                </h1>
                <p className="mt-4 text-[#C02141]">
                    Conseguimos atender a todas as suas necessidades
                </p>
                <Link href="#contato">
                    <button className="mt-6 px-6 py-2 rounded transition bg-[#C02141] text-white hover:bg-[#A81C37] focus:outline-none focus:ring-2 focus:ring-[#C02141] focus:ring-opacity-50">
                        Contate-nos
                    </button>
                </Link>
            </div>
        </header>
    );
}