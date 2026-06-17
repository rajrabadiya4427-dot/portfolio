import React from "react";

const ImageModle= ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 imges flex items-center justify-center bg-black/90 px-6"
      onClick={onClose}
    >
     

      {/* Image */}
      <img
        src={image}
        alt=""
        onClick={onClose}
        className="max-h-[85vh] max-w-[85vw] rounded-2xl object-contain shadow-[0_0_50px_rgba(168,85,247,.4)]"
      />
    </div>
  );
};

export default ImageModle;