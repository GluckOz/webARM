import { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface TrackAvatarProps {
  title: string,
  alt: string,
  src: StaticImageData
}

const TrackAvatar: React.FC<TrackAvatarProps> = ({title, alt, src}) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/album/track1`)} className="w-[60px] h-[60px] rounded-lg overflow-hidden cursor-pointer">
      <img src={src.src} alt={alt} draggable="false" title={title} className="object-cover" />
    </div>
  );
}

export default TrackAvatar;