import { useEffect } from "react";
import { trackEvent } from "../config/analytics";

const PROGRESS_MILESTONES = [25, 50, 75];

/**
 * GA4 video engagement for HTML5 <video> elements (play, pause, progress, complete).
 */
const useVideoAnalytics = (videoRef, { videoName, videoLocation = "unknown" }) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reachedMilestones = new Set();

    const baseParams = () => ({
      video_title: videoName,
      video_location: videoLocation,
      video_current_time: Math.round(video.currentTime),
      video_duration: Number.isFinite(video.duration)
        ? Math.round(video.duration)
        : undefined,
      video_percent: video.duration
        ? Math.round((video.currentTime / video.duration) * 100)
        : 0,
    });

    const onPlay = () => {
      trackEvent("video_play", baseParams());
    };

    const onPause = () => {
      if (video.ended) return;
      trackEvent("video_pause", baseParams());
    };

    const onEnded = () => {
      trackEvent("video_complete", {
        ...baseParams(),
        video_percent: 100,
      });
    };

    const onTimeUpdate = () => {
      if (!video.duration) return;

      const percent = (video.currentTime / video.duration) * 100;

      PROGRESS_MILESTONES.forEach((milestone) => {
        if (percent >= milestone && !reachedMilestones.has(milestone)) {
          reachedMilestones.add(milestone);
          trackEvent("video_progress", {
            ...baseParams(),
            video_percent: milestone,
            progress_milestone: milestone,
          });
        }
      });
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [videoRef, videoName, videoLocation]);
};

export default useVideoAnalytics;
