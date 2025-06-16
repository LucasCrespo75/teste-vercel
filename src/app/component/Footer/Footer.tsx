"use client";

import Image from "next/image";
import logo from "../../../assets/Group 3.png";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#121212] text-white pt-4">
            <div className="flex flex-col items-center text-center px-4">
                <Image src={logo} alt="Logo" width={450} height={139} className="flex items-center ml-45" />
                <p className="max-w-2xl text-sm -mt-10 text-gray-300">
                    Breve mensagem do que a companhia faz para a melhora do serviço. Breve mensagem do que a companhia faz para a melhora do serviço. Breve mensagem do que a companhia faz para a melhora do serviço. Breve mensagem do que a companhia faz para a melhora do serviço.
                </p>

                <div className="flex space-x-6 mt-6 text-2xl">
                    <a href="#" className="hover:text-red-600 transition"><FaInstagram /></a>
                    <a href="#" className="hover:text-red-600 transition"><FaFacebookF /></a>
                    <a href="#" className="hover:text-red-600 transition"><FaWhatsapp /></a>
                </div>
            </div>

            {/* Linha divisória */}
            <div className="border-t border-gray-700 mt-10"></div>

            {/* Rodapé inferior */}
            <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 text-sm text-gray-400">
                <p>Copyright ©{new Date().getFullYear()} | Freitas Gonçalves Construções</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="/" className="hover:text-white">Home</a>
                    <a href="/sobre" className="hover:text-white">Sobre</a>
                    <a href="/servico" className="hover:text-white">Serviços</a>
                </div>
            </div>
        </footer>
    );
}