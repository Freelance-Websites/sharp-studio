export default function VimeoEmbed({ url }: {
  url?: string;
}) {
  return (
    <>
      <div
        className="relative aspect-video"
      >
        <iframe
          src={`https://player.vimeo.com/video/${url?.split('vimeo.com/')[1]}?h=5764ab8c22&autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&badge=0`}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  )
}