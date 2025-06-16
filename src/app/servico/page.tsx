"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHardHat, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import HeaderServico from "../servico/HeaderServico";

export default function PageServicos() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-sans bg-white">

            {/* Hero */}
            <HeaderServico />

            {/* Serviços Diversificados */}
            <section className="py-20 px-8 bg-gray-100 text-center">
                <h2 className="text-xl font-semibold text-red-500 mb-2">Serviços</h2>
                <h3 className="text-3xl font-bold mb-10">Serviços Diversificados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <FaHardHat className="text-red-600 text-3xl mb-4 mx-auto" />
                            <h4 className="font-bold text-lg mb-2">Flexibilidade no Atendimento</h4>
                            <p className="text-sm text-gray-600">As melhores pinturas As melhores pinturas As melhores pinturas</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Exemplo de Ações */}
            <section className="py-20 px-8 bg-white text-center">
                <h2 className="text-xl font-semibold text-red-500 mb-2">Serviços realizados</h2>
                <h3 className="text-3xl font-bold mb-10">Exemplo de Ações</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {['edif1.jpg', 'edif2.jpg', 'edif3.jpg'].map((img, i) => (
                        <motion.div
                            key={i}
                            className="relative h-80 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <img src={`/${img}`} className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                                <h4 className="text-xl font-semibold">Nome do Edifício</h4>
                                <p className="text-sm mt-2">O que foi feito<br />Status</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contato destaque */}
            <section className="bg-red-600 text-white py-16 px-8 text-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h3 className="text-2xl font-semibold mb-4 max-w-2xl mx-auto">
                        Vamos discutir como podemos satisfazer as suas necessidades e ter a melhor qualidade no seu serviço
                    </h3>
                    <button className="mt-4 px-6 py-2 bg-white text-red-600 font-semibold rounded-md hover:bg-gray-100">
                        Contate-nos
                    </button>
                </motion.div>
            </section>

            {/* Depoimentos */}
            <section className="py-20 px-8 bg-gray-50 text-center">
                <h2 className="text-xl font-semibold text-red-500 mb-2">Cliente</h2>
                <h3 className="text-3xl font-bold mb-10">Satisfação dos nosso Clientes</h3>
                <motion.div className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <p className="text-lg font-medium">“Minha opinião Minha opinião Minha opinião Minha opinião Minha opinião Minha opinião”</p>
                    <p className="mt-4 text-sm text-gray-600">Nome do comentador - Cargo da pessoa</p>
                </motion.div>
            </section>


        </main>
    );
}