"use client";

import Head from "next/head";
import HeroSobre from "../Hero/HeroSobre";

export default function AboutPage() {
    return (
        <>
            <HeroSobre />
            <Head>
                <title>Sobre Nós - Freitas Gonçalves Construções</title>
            </Head>

            <section className="py-16 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-primary mb-8 text-center">Sobre a Freitas Gonçalves Construções</h1>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <img
                            src="/engenheiros-reunidos.jpg" // Substitua pelo caminho da sua imagem
                            alt="Equipe da Freitas Gonçalves"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa História</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Fundada com a paixão pela construção e o compromisso com a excelência, a Freitas Gonçalves Construções tem orgulho de entregar projetos de alta qualidade há mais de uma década. Nossa jornada é marcada pela busca contínua por inovação, pela valorização de nossos clientes e pela integridade em cada obra.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Acreditamos que a chave para o sucesso está na colaboração, na comunicação transparente e no foco em resultados que superem as expectativas. Nossa equipe é composta por profissionais experientes e dedicados, prontos para transformar suas ideias em realidade.
                        </p>
                        {/* Adicione mais informações sobre a empresa, equipe, etc. */}
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Nossos Valores</h2>
                    <ul className="grid md:grid-cols-3 gap-6">
                        <li className="bg-gray-100 p-6 rounded-md shadow-sm">
                            <h3 className="font-semibold text-primary mb-2">Qualidade</h3>
                            <p className="text-gray-600 text-sm">Compromisso com os mais altos padrões em cada etapa do projeto.</p>
                        </li>
                        <li className="bg-gray-100 p-6 rounded-md shadow-sm">
                            <h3 className="font-semibold text-primary mb-2">Confiança</h3>
                            <p className="text-gray-600 text-sm">Relações transparentes e honestas com nossos clientes e parceiros.</p>
                        </li>
                        <li className="bg-gray-100 p-6 rounded-md shadow-sm">
                            <h3 className="font-semibold text-primary mb-2">Inovação</h3>
                            <p className="text-gray-600 text-sm">Busca constante por novas tecnologias e soluções eficientes.</p>
                        </li>
                        {/* Adicionar mais valores */}
                    </ul>
                </div>
            </section>
        </>
    );
}