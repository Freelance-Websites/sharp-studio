import dynamic from 'next/dynamic';

const ReactPhotoSphereViewer = dynamic(
  () =>
    import('react-photo-sphere-viewer').then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

export default function services360() {
  return (
    <main>
      <ReactPhotoSphereViewer
        src={'/images/architects-and-developers/services-slider-2.jpg'}
        height={'100vh'}
        width={"100%"}
        navbar={false}
        container={""}
      />
    </main>
  )
}