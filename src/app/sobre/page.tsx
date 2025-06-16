"use client";

import Head from "next/head";
import Image from "next/image";
import HeaderSobre from "../sobre/HeaderSobre";

export default function AboutPage() {
    return (
        <>

            {/* Hero */}
            <HeaderSobre />

            {/* Seção Sobre Nós */}
            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">📎 Sobre Nós</h2>
                    <h3 className="text-xl font-semibold text-black">Sempre ter o melhor serviço mais adequado para o cliente</h3>
                    <p className="text-gray-700">
                        Texto breve sobre a empresa e a garantia de satisfação do cliente. Texto breve sobre a empresa e a garantia de satisfação do cliente...
                    </p>
                    <button className="mt-4 bg-primary text-white px-6 py-2 rounded">Contate-nos</button>
                </div>
                <div className="relative">
                    <Image
                        src="/images/engenheiro-tablet.jpg"
                        alt="Engenheiro"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                        10 Anos de Experiência
                    </div>
                </div>
            </section>

            {/* Cards com ícones */}
            <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-100 rounded-md text-center shadow">
                    <h3 className="text-lg font-bold">🛠️ Experiência e Expertise</h3>
                    <p className="text-gray-600 mt-2 text-sm">Texto de Expertise e Experiência</p>
                </div>
                <div className="p-6 bg-primary text-white rounded-md text-center shadow">
                    <h3 className="text-lg font-bold">🔀 Flexibilidade no Atendimento</h3>
                    <p className="mt-2 text-sm">As melhores práticas. As melhores soluções.</p>
                </div>
                <div className="p-6 bg-gray-100 rounded-md text-center shadow">
                    <h3 className="text-lg font-bold">🎯 Pintura estratégica</h3>
                    <p className="text-gray-600 mt-2 text-sm">Qualidade e precisão nas execuções.</p>
                </div>
            </section>

            {/* Alta Competência */}
            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-lg">
                <div>
                    <h2 className="text-xl font-bold text-primary mb-4">📎 Alta competência</h2>
                    <h3 className="text-lg font-semibold text-black mb-2">Serviços em andamento de alta competência</h3>
                    <p className="text-gray-700 mb-4">
                        Texto sobre os serviços e competência. Texto de apoio e descrição breve.
                    </p>
                    <ul className="text-sm text-green-600 space-y-1">
                        <li>✅ Qualidade no Serviço</li>
                        <li>✅ Qualidade no Serviço</li>
                        <li>✅ Qualidade no Serviço</li>
                        <li>✅ Qualidade no Serviço</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-6">
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-black">50+</span>
                            <span className="text-xs">Obras em Atuação</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-black">20+</span>
                            <span className="text-xs">Clientes Satisfeitos</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-black">10+</span>
                            <span className="text-xs">Fechamentos de Contratos</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/obra-construcao.jpg"
                        alt="Obra em andamento"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </section>

            {/* Time */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-xl font-bold text-primary mb-2">📎 Equipe</h2>
                <h3 className="text-2xl font-bold mb-10">Time experiente e capacitado</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/images/colaborador.jpg"
                                alt="Colaborador"
                                width={400}
                                height={300}
                                className="w-full"
                            />
                            <div className="bg-black text-white p-2">
                                <p className="text-sm">Nome do Colaborador</p>
                                <p className="text-xs text-gray-300">Cargo do Colaborador</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="py-8 text-center">
                <Image src="/logo-footer.svg" alt="Logo" width={80} height={80} />
                <p className="text-sm text-gray-600 mt-2">Construções</p>
            </footer>
        </>
    );
}
