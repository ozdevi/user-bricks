import Image from "next/image";

export default function UnderConstructionGif() {
    return (
        <figure>
            <Image src="/assets/under-construction.gif"
                alt="A pictogram worker is digging the ground."
                title="Brick #1 by @ozdevi on 2020-05-14"
                width={81}
                height={50}
            />
            <figcaption>
                <small>gif graciously taken from <a href="http://textfiles.com/underconstruction/" rel="noopener noreferrer">textfiles.com</a></small>
            </figcaption>
        </figure>
    );
}