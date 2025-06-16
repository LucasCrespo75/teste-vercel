"use client";

import Image, { StaticImageData } from "next/image";

type MembrosEquipeProps = {
    name: string;
    role: string;
    image: StaticImageData;
};

export default function Membros({ name, role, image }: MembrosEquipeProps) {
    return (
        <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
            <Image
                src={image}
                alt={name}
                className="w-full h-[440px] object-cover rounded-tr-4xl transition-transform duration-500 group-hover:scale-103"
                priority
            />
            <div className="absolute bottom-4 left-4 text-white z-10">
                <p className="font-semibold text-xl drop-shadow">{name}</p>
                <p className="text-sm drop-shadow">{role}</p>
            </div>
        </div>
    );
}