"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
type ImageSliderProps = {
  url: string;
  limit?: number;
  page?: number;
};
type ImageItem = {
  id?: string;
  download_url?: string;
};
export default function ImageSlider({
  url,
  limit = 5,
  page = 1,
}: ImageSliderProps) {
  const [images, setImages] = useState<ImageItem[] | []>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) setImages(data);
    } catch (e: any) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  }
  function handlePrevious(){
   setCurrentSlide(currentSlide === 0? images.length-1:currentSlide-1)
  }
  function handleNext(){
    setCurrentSlide(currentSlide === images.length-1?0:currentSlide+1)
  }
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  if (loading) {
    return <div>Loading Data! Please wait</div>;
  }
  if (errorMsg != null) {
    return <div>Error Occured!, {errorMsg}</div>;
  }
  return (
    <div className="container mx-auto">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious} />
      {images && images.length
        ? images.map((imageItem,index) => (
            <Image
              key={imageItem!.id}
              alt={imageItem!.download_url!}
              src={imageItem!.download_url!}
              fill
              className={currentSlide === index ?"current-image":"current-image hide-current-image"}
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className={currentSlide===index?"current-indicator":"current-indicator inactive-indicator"}
              onClick={()=>setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
