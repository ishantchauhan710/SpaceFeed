import { Lightbox } from "react-modal-image";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideImageModal } from "../../../../states/other/imageModalSlice";

const ImageModal = (url, closeAction) => {
  const dispatch = useDispatch();
  const imageModalSrc = useSelector((state) => state.imageModal.imageSrc);

  return (
    <Lightbox
      medium={imageModalSrc}
      large={imageModalSrc}
      alt=""
      onClose={() => {
        dispatch(hideImageModal());
      }}
    />
  );
};

export default ImageModal;
