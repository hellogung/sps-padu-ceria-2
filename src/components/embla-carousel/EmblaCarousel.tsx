"use client";

import React, {useCallback} from "react";
import {EmblaOptionsType, EmblaCarouselType} from "embla-carousel";
import {DotButton, useDotButton} from "./EmblaCarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import Image from "next/image";
import {cn} from "@/lib/utils";

type PropType = {
    slides: {
        image: string;
        link?: string;
    }[];
    options?: EmblaOptionsType;
    customClasses?: string;
    customBasis?: string
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const {slides, options, customClasses, customBasis = "basis-[90%]"} = props;

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop;

        resetOrStop();
    }, []);

    const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(
        emblaApi,
        onNavButtonClick
    );

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi, onNavButtonClick);

    return (
        <>
            <section className="embla theme-light">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((item, index) => (
                            <div className={cn("embla__slide flex-shrink-0 flex-grow-0", customBasis)}
                                 key={index}>
                                <div className={cn("embla__slide__number w-full aspect-[16/9]", customClasses)}>
                                    <a href={item.link} className="w-full h-full">
                                        <img
                                            src={item.image}
                                            className="rounded-3xl w-full h-full object-cover"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                    </div>

                    <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={"embla__dot".concat(
                                    index === selectedIndex ? " embla__dot--selected" : ""
                                )}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EmblaCarousel;
