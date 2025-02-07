import { FC } from 'react'

interface YouTubeEmbedProps {
  id: string
  title: string
}

const YouTubeEmbed: FC<YouTubeEmbedProps> = ({ id, title }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full my-4">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        className="absolute top-0 left-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeEmbed