import { StaticImageData } from "next/image"

export interface PlaylistImageProps {
	image: StaticImageData,
	alt: string
}

const PlaylistImage: React.FC<PlaylistImageProps> = ({ image, alt }) => {
	return (
		<>
			<div className="rounded-xl overflow-hidden">
				<img src={image.src} alt={alt} width={136} height={136} />
			</div>
		</>
	)
}

export default PlaylistImage;