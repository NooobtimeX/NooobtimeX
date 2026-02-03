"use client";

import ComicPop from "@/components/motion/ComicPop";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    rotate: direction > 0 ? 5 : -5,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    rotate: direction < 0 ? 5 : -5,
    scale: 0.9,
  }),
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    // Keep selectedImageIndex in sync if needed for other things, or replace it.
    // For now, let's just update the local index for compatibility.
    const nextIndex =
      (selectedImageIndex + newDirection + images.length) % images.length;
    setSelectedImageIndex(nextIndex);
  };

  const goToPrevious = () => paginate(-1);
  const goToNext = () => paginate(1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") setIsOpen(false);
  };

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <ComicPop
            key={index}
            delay={index * 0.1}
            className="group relative aspect-square overflow-hidden border-2 border-white bg-black cursor-pointer shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white] transition-all"
            onClick={() => {
              setSelectedImageIndex(index);
              setPage([index, 0]);
              setIsOpen(true);
            }}
          >
            <div className="absolute top-0 right-0 z-10 bg-primary text-white text-xs px-1 font-[Bangers] border-l-2 border-b-2 border-black opacity-0 group-hover:opacity-100 transition-opacity">
              #{index + 1}
            </div>
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-multiply" />
          </ComicPop>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-7xl w-full h-[90vh] p-0 border-4 border-white bg-black/95 shadow-[0_0_50px_rgba(255,255,255,0.2)] rounded-none"
          onKeyDown={handleKeyDown}
        >
          <div className="sr-only">
            <DialogTitle>{title}</DialogTitle>
          </div>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white bg-black border-2 border-white rounded-none hover:bg-primary hover:border-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="w-6 h-6" />
            </Button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-none border-2 border-transparent hover:border-white"
                  onClick={goToPrevious}
                >
                  <ChevronLeftIcon className="w-10 h-10" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-none border-2 border-transparent hover:border-white"
                  onClick={goToNext}
                >
                  <ChevronRightIcon className="w-10 h-10" />
                </Button>
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full h-full p-12 md:p-20 flex items-center justify-center">
              <div className="relative w-full h-full border-2 border-white/20 bg-black overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      rotate: { duration: 0.4 },
                      scale: { duration: 0.4 },
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[selectedImageIndex]}
                      alt={`${title} - Image ${selectedImageIndex + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 font-[Bangers] text-xl border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                PAGE {selectedImageIndex + 1} OF {images.length}
              </div>
            )}

            {/* Thumbnail Strip (Optional - keeping generic dots/thumbnails minimalist for cleaner view) */}
            {/* Removed thumbnail strip inside modal to focus on image */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
