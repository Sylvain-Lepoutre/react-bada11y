type Props = {
  videoSrc: string;
  trackSrc: string;
};

export const VideoDisplay = ({ videoSrc, trackSrc }: Props) => {
  return (
    <video className="mx-auto my-4" controls width="800">
      <source src={videoSrc} type="video/mp4" />
      <track default kind="captions" src={trackSrc} srcLang="fr" />
    </video>
  );
};
