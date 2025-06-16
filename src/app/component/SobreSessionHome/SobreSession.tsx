"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import engenheiroImage from '../../../assets/engenheiro.jpg'; // Ajuste o caminho se 'assets' não estiver na raiz de 'src'


export default function SobreEServicos() {
    const services = [
        {
            title: "Mais agilidade",
            desc: "As melhores pinturas com rapidez e eficiência, para entregar sempre no prazo.",
            icon: "⚙️",
        },
        {
            title: "Flexibilidade no Atendimento",
            desc: "Atendimento personalizado, adaptando-se às suas necessidades específicas.",
            icon: "🔧",
            destaque: true,
        },
        {
            title: "Pintura estratégica",
            desc: "Planejamento e execução precisos para resultados duradouros e de alta qualidade.",
            icon: "🎯",
        },
    ];

    return (
        <section className="bg-white py-24 px-6">
            {/* CARDS DE SERVIÇO */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-24">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.25 }}
                        className={`p-8 rounded-3xl border ${s.destaque
                            ? "bg-red-600 text-white border-red-600 shadow-lg"
                            : "bg-white text-gray-800 border-gray-200 shadow-sm hover:shadow-md"
                            } hover:-translate-y-1 transition-transform duration-300`}
                    >
                        <div className="text-5xl mb-6">{s.icon}</div>
                        <h4 className="font-semibold text-xl mb-3">{s.title}</h4>
                        <p className="text-sm leading-relaxed">{s.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <div
                        className="absolute"
                        style={{
                            left: "calc(var(--spacing) * -4)",
                            top: "calc(var(--spacing) * -4)",
                            width: "134px",
                            height: "125px",
                            backgroundColor: "#E6E6E6",
                            borderBottomLeftRadius: "20px",
                            borderTopRightRadius: "20px",
                            zIndex: 0,
                        }}
                    ></div>

                    <div
                        className="relative z-10 shadow-lg overflow-hidden rounded-tr-[20px] rounded-bl-[20px]"
                        style={{ width: 452, height: 491, backgroundColor: "transparent" }}
                    >
                        <Image
                            src={engenheiroImage}
                            alt="Engenheiro"
                            width={452}
                            height={491}
                            priority
                            className="object-cover w-full h-full"
                            style={{ backgroundColor: "transparent" }}
                        />
                    </div>

                    <div className="absolute top-1/3 left-[85%] -translate-y-1/2 -translate-x-1/2 bg-red-600 rounded-md shadow-lg select-none z-20 px-2 py-2 w-[207.15px] h-[96px]">
                        <div className="border-2 border-dotted border-white rounded-md px-6 py-3 flex items-center text-white">
                            <div className="text-4xl md:text-5xl font-extrabold mr-4 leading-none -ml-3">
                                10
                            </div>
                            <div className="text-sm md:text- font-semibold leading-tight text-left">
                                <div>Anos</div>
                                <div>Experiência</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className=""
                >
                    <h3 className="text-red-600 font-semibold text-sm mb-3 flex items-center gap-2 select-none">
                        <span>📍</span> Sobre Nós
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                        Competitividade e melhor <br /> Concorrência no Mercado
                    </h2>
                    <p className="text-gray-700 mb-8 text-base leading-relaxed">
                        Nosso objetivo é simplificar os processos de gestão de obra,
                        oferecendo soluções fáceis, com suporte técnico eficiente, visando
                        aumentar a produtividade e eficiência dos nossos clientes, para
                        desenvolver cada vez mais o setor civil!
                    </p>

                    <ul className="text-sm text-gray-700 mb-8 grid grid-cols-2 gap-y-3">
                        <li>✅ Qualidade no Serviço</li>
                        <li>✅ Sustentabilidade</li>
                        <li>✅ Atendimento técnico</li>
                        <li>✅ Execução com eficiência</li>
                    </ul>

                    <div className="flex items-center gap-12 mb-8 select-none">
                        <div className="text-center">
                            <h4 className="text-4xl font-extrabold text-red-600 leading-none">
                                50+
                            </h4>
                            <p className="text-sm text-gray-600">Anos em Atuação</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-4xl font-extrabold text-red-600 leading-none">
                                20+
                            </h4>
                            <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-red-700 transition"
                    >
                        Contate-nos
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}