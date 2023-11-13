import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextImage({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) {
    sizes = sizes.replace('calc', 'calc(max(') + '), 50px)'
    return (
        <div style={{ ...wrapperStyle, position: "relative" }}>
            <Image
                fill
                src={photo}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                {...{ alt, title, sizes, className, onClick }}
            />
        </div>
    );
}

