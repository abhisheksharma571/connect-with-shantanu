import HeroVideoDialog from "../../components/magicui/hero-video-dialog";
import { cn } from "../../lib/utils";
import DotPattern from "../../components/magicui/dot-pattern";

export default function HeroVideoDialogDemo() {
  return (
    <>

    <p className="text-2xl md:text-4xl text-center font-bold font-philosopher text-[#19a99d] pt-5 px-8 md:px-44">Our Clients & We Have Done Over 56 Crores In Online Sales With The 5 Step Process...</p>

    <div className="relative flex gap-3 md:gap-x-20 md:gap-y-10  my-10 flex-wrap justify-center mx-4 md:mx-44">
    <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <HeroVideoDialog
        className="w-[400px]"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="./images/tn1.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="w-[400px]"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="./images/tn2.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="w-[400px]"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="./images/tn2.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="w-[400px]"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="./images/tn1.png"
        thumbnailAlt="Hero Video"
      />
    </div>
    </>
  );
}