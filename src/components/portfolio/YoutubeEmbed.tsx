export default function YoutubeEmbed({ url }: {
  url?: string;
}) {
  return (
    <>
      <div
        className="relative aspect-video"
      >
        <iframe
          src={`https://www.youtube.com/embed/${url?.split('youtube.com/watch?v=')[1]}`}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  )
}