export default function HeroHeaderImage() {
  return (
    <div className="-z-[1]">
      {/* src={require("public/movies/movie2.mov")} */}
      {/* src={require("https://inter-tech-security.s3.ap-northeast-1.amazonaws.com/movie2.mov")} */}
      {/* src="https://inter-tech-security.s3.ap-northeast-1.amazonaws.com/movie2.mov" */}
      <video
        src="https://res.cloudinary.com/drv9u4rwb/video/upload/v1682427075/movie2_AdobeExpress_ia1xph.mp4"
        autoPlay
        muted
        loop
        className="w-[100vw]"
      />
    </div>
  );
}
