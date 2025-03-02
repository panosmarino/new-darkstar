import Header from "@/components/Header";
import Image from "next/image";
import meaningfulImage from "@/components/Meaningful Image.png";

export default function About() {
  return (
    <div className="min-h-screen bg-sky-100 relative overflow-hidden">
      <Header />
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full hidden tablet:block" preserveAspectRatio="none">
            <path fill="white" fillOpacity="1" d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="w-full block tablet:hidden" preserveAspectRatio="none">
            <path fill="white" fillOpacity="1" d="M0,256L60,234.7C120,213,240,171,360,176C480,181,600,235,720,240C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
        {/* Bottom wave */}
        <div className="absolute -bottom-32 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full hidden tablet:block" preserveAspectRatio="none">
            <path fill="white" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="w-full block tablet:hidden" preserveAspectRatio="none">
            <path fill="white" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,144C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <main className="relative flex justify-between px-[10%] pt-40">
        <div className="max-w-2xl mt-20">
          <h1 className="text-black text-8xl font-bold mb-8">About Us</h1>
          <p className="text-black text-xl leading-relaxed">
            Darkstar Pictures began as a creative experiment during Junior High 2, sparked by a shared passion for filmmaking. What started as a few school project videos quickly grew into a collaborative venture. Inspired by the positive feedback and the thrill of creation, we branded our efforts as "Darkstar Pictures." Over the past year, we've expanded our scope by contributing to the media aspects of school theatrical plays, teaming up with fellow classmates to bring dynamic visuals to the stage. Our journey is just beginning, and we're excited to share our growing portfolio with the world.
          </p>
        </div>
        <div className="hidden tablet:block flex-shrink-0 mt-8">
          <Image 
            src={meaningfulImage}
            alt="Meaningful Image"
            width={400}
            height={300}
            className="rounded-lg object-cover !border-0 outline-none"
          />
        </div>
      </main>
    </div>
  );
} 