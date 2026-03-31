import { useState } from "react";
import { PlayCircle } from "lucide-react";

const YoutubeVideo = ({ videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
        {!isPlaying ? (
          <div
            className="relative cursor-pointer aspect-video group"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnail}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover transition group-hover:brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <PlayCircle className="text-white w-20 h-20 md:w-24 md:h-24 opacity-90 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
        ) : (
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        )}
      </div>
      <div className="mt-4 text-gray-900 dark:text-white text-center">
        <h2 className="text-2xl font-semibold transition-colors duration-500">{title}</h2>
      </div>
    </div>
  );
};

export default YoutubeVideo;
