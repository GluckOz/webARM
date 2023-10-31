import { MusicPlayer } from '@/components/MusicPlayer'
import Sidebar from '@/components/sidebar/Sidebar';
import Playlists from '@/components/sections/Playlists';

export default function Page() {
  return (
    <div className="flex flex-row gap-x-4 h-screen w-full overflow-hidden">
      <Sidebar />
      <Playlists />
      <MusicPlayer />
    </div>
  )
}