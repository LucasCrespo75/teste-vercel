"use client";

import { motion } from "framer-motion";
import MembrosEquipe from "../MembrosObras/Membros";
import ObrasCarousel from "../UI/Carrousel/ObrasCarrousel";

import colaborador1 from "../../../assets/image 16.png";
import colaborador2 from "../../../assets/image 16.png";
import colaborador3 from "../../../assets/image 16.png";

import obra1 from "../../../assets/image 10.png";
import obra2 from "../../../assets/image 10.png";
import obra3 from "../../../assets/image 10.png";
import obra4 from "../../../assets/image 10.png";
import obra5 from "../../../assets/image 10.png";

const colaboradores = [
    {
        name: "João Silva",
        role: "Engenheiro Civil Sênior",
        image: colaborador1,
    },
    {
        name: "Maria Oliveira",
        role: "Arquiteta de Projetos",
        image: colaborador2,
    },
    {
        name: "Pedro Souza",
        role: "Gerente de Obras",
        image: colaborador3,
    },
];

// Repetindo as imagens para dar mais volume ao carrossel
const obras = [...Array(3)].flatMap(() => [obra1, obra2, obra3, obra4, obra5]);

export default function Equipe() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-red-700 font-semibold text-lg tracking-wide mb-2">
                        📌 Equipe e Obras Realizadas
                    </h3>
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Nossa Equipe de Profissionais
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {colaboradores.map((colaborador, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                            }}
                            whileHover={{ scale: 1.03 }}
                            className="transition-transform"
                        >
                            <MembrosEquipe {...colaborador} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <ObrasCarousel images={obras} />
                </motion.div>
            </div>
        </section>
    );
}