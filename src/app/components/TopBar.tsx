'use client';

import {
  SiSpotify,
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';

export default function TopBar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <h1 className="absolute top-[5px] left-[10px] text-[36px] font-regular">
        Nick Crone's Live Music Dashboard:
      </h1>

      {/* Simple Icons */}
      <a
        href="https://spotify.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[25px] right-[200px]"
      >
        <SiSpotify className="text-black w-[45px] h-[45px] hover:text-gray-600 transition" />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[25px] right-[125px]"
      >
        <SiGithub className="text-black w-[45px] h-[45px] hover:text-gray-600 transition" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[25px] right-[50px]"
      >
        <SiLinkedin className="text-black w-[45px] h-[45px] hover:text-gray-600 transition" />
      </a>
    </header>
  );
}