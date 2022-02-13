import { useRecoilState } from 'recoil'
import { useSession } from 'next-auth/react'
import { currentTrackIdState, isPlayingState } from '../Atoms/SongAtom'
import useSpotify from '../Hooks/useSpotify'
import useSongInfo from '../Hooks/useSongInfo'
import { useState } from 'react'

export default function Player() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volume, setVolume] = useState(50)

  const songInfo = useSongInfo();

  return <div>
    <div>
      <img src={songInfo?.album.images?.[0]?.url} alt=""/>
    </div>
  </div>
}
