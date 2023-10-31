import { useRouter } from "next/router";

interface TrackArtistProps {
  trackname: string,
  artist: string,
  feat?: string,
  album?: string,
}

const TrackArtist: React.FC<TrackArtistProps> = ({trackname, artist, feat, album}) => {
  const router = useRouter();

  return ( 
    <div className="flex flex-col">
      <p onClick={() => router.push(`/album/track1`)} className="text-neutral-200 hover:underline hover:underline-offset-2 cursor-pointer">{trackname}</p>
      <p onClick={() => router.push(`/artist/artist1`)} className="text-neutral-500 hover:underline hover:underline-offset-2 cursor-pointer">{artist}</p>
    </div>
   );
}
 
export default TrackArtist;