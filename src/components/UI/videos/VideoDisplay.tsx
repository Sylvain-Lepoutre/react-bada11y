type Props = {
  videoFile: string;
  trackFile: string;
};

export const VideoDisplay = ({ videoFile, trackFile }: Props) => {
  return (
    <video className="mx-auto my-4" controls width="800">
      <source src={`/videos/${videoFile}`} type="video/mp4" />
      <track
        default
        kind="captions"
        src={`/videos/${trackFile}`}
        srcLang="fr"
      />
    </video>
  );
};
