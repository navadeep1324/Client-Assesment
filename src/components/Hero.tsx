import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import heroElement from "@/assets/hero-element.png";
import demoVideo from "@/assets/PulseBoard-Demo_II_1920x1080.mp4";
import videoPoster from "@/assets/PulseBoard_ Featured image_1920x1080.png";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newProgress = parseFloat(e.target.value);
    const newTime = (newProgress / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(newProgress);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volume || 0.5;
      setVolume(volume || 0.5);
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Hero decorative element - bottom left */}
      {/* <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
        <img src={heroElement} alt="" className="hero-element-image" />
      </div> */}

      {/* Blue curve decorative element - top of video */}
      <div className="absolute right-4 top-5 z-0 pointer-events-none overflow-hidden" style={{ width: '50%', height: '50%' }}>
        <svg
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 -top-80"
          style={{ width: '800px', height: '800px', transform: 'scaleX(-1)' }}
        >
          <circle
            cx="400"
            cy="400"
            r="350"
            fill="#003E94"
            opacity="1"
          />
        </svg>
      </div>

      {/* Wave decoration */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute bottom-0 left-0 w-full h-auto opacity-10"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="currentColor"
            className="text-white"
          />
        </svg>
        <svg 
          className="absolute -left-20 top-1/4 w-[600px] h-[600px] opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            className="text-white"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.5,75.6,43.6C67.4,56.7,55.4,67.7,41.5,74.8C27.6,82,11.8,85.3,-3.5,84.1C-18.8,82.9,-37.6,77.2,-52.9,67.5C-68.2,57.8,-80,44.1,-85.1,28.4C-90.2,12.7,-88.6,-5,-83.1,-21.2C-77.6,-37.4,-68.2,-52.1,-55.4,-60.3C-42.6,-68.5,-26.5,-70.2,-11.2,-69.8C4.1,-69.4,30.6,-83.6,44.7,-76.4Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div> */}

      {/* Content - Two Column Layout */}
      <div className="container relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-8xl mx-auto ">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in text-left hero-col1 ">
            <h1 className="h1-heading">
              Monitor{" "}
              <span className="text-gradient">
                Business and Team Performance
              </span>{" "}
              in One Powerful Dashboard
            </h1>

            <p className="para-text">
              PulseBoard brings every call, lead, and team action into one smart
              dashboard—so you can see everything in real time, spot gaps
              instantly, and boost performance across your entire business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                size="lg"
                className="hover:bg-white/95 text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 button-item"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Demo
              </Button>
              {/* <Button 
                size="lg" 
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full font-semibold backdrop-blur-sm"
              >
                Learn More
              </Button> */}
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative animate-fade-in pb-12">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl group border-8 border-transparent"
              style={{
                background:
                  "linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, #9beaa6, #36c0ed) border-box",
              }}
            >
              <video
                ref={videoRef}
                className="w-full video-h rounded-l cursor-pointer"
                poster={videoPoster}
                onClick={togglePlay}
              >
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay - Center */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-all duration-300 hover:scale-110">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Progress Bar */}
                <div className="mb-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #10B2E6 0%, #10B2E6 ${progress}%, #4B5563 ${progress}%, #4B5563 100%)`,
                    }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-[#10B2E6] transition-colors"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>

                    {/* Volume Control */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="text-white hover:text-[#10B2E6] transition-colors"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #10B2E6 0%, #10B2E6 ${
                            (isMuted ? 0 : volume) * 100
                          }%, #4B5563 ${
                            (isMuted ? 0 : volume) * 100
                          }%, #4B5563 100%)`,
                        }}
                      />
                    </div>

                    {/* Time Display */}
                    <span className="text-white text-sm font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-white hover:text-[#10B2E6] transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video overlay for aesthetics */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;
