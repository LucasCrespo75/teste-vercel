"use client";

import Image, { StaticImageData } from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";

type ObrasCarouselProps = {
    images: StaticImageData[];
};

export default function ObrasCarousel({ images }: ObrasCarouselProps) {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slides: {
            perView: 3,
            spacing: 20,
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: { perView: 1, spacing: 12 },
            },
            "(max-width: 1024px)": {
                slides: { perView: 2, spacing: 16 },
            },
        },
        created(s) {
            let timeout: any;
            function run() {
                timeout = setTimeout(() => {
                    s.next();
                }, 3000);
            }
            run();
            s.on("dragStarted", () => clearTimeout(timeout));
            s.on("animationEnded", () => run());
            s.on("updated", () => run());
        },
    });

    return (
        <div className="w-full overflow-hidden">
            <div ref={sliderRef} className="keen-slider">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="keen-slider__slide rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-101"
                    >
                        <Image
                            src={img}
                            alt={`Obra ${i + 1}`}
                            className="w-full h-64 md:h-80 object-cover"
                            placeholder="blur"
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}