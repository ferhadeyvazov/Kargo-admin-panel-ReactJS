import React from "react";

const SiteUsageSingleVideo = () => {
  return (
    <div className="site-usage-video">
      <div className="video-description">
        <h4>Choose your description!</h4>
      </div>
      <div className="cargo-video">
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4"></source>
        </video>
        {/* <!-- <iframe width="70%" height="60%" src="https://www.youtube.com/embed/4UZrsTqkcW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> */}
      </div>
    </div>
  );
};

export default SiteUsageSingleVideo;
