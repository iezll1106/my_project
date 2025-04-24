import Image from 'next/image';
import { lora } from '@/app/ui/fonts';

export function HCHLogo() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-2 text-white md:flex-row md:space-x-8">
      {/* Left Logo */}
      <Image
        src="/logo_province.png"
        alt="Province Logo"
        width={80}
        height={80}
        className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mb-4 md:mb-0"
      />

      {/* Text Section */}
      <div className="flex flex-col items-center text-center">
        <p className={`${lora.className} text-xl sm:text-3xl md:text-4xl lg:text-5xl`}>
          Province of Guimaras
        </p>
        <p className={`${lora.className} text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
          Republic of the Philippines
        </p>
      </div>
    </div>
  );
}

export function SideNavLogo() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-6 text-white md:flex-row md:space-x-8">
      {/* Left Logo */}
      <Image
        src="/logo_province.png"
        alt="Province Logo"
        width={80}
        height={80}
        className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mb-4 md:mb-0"
      />

      {/* Text Section */}
      <div className="flex flex-col items-center text-center">
        <p className={`${lora.className} text-xl sm:text-3xl md:text-4xl lg:text-5xl`}>
          Province of Guimaras
        </p>
        <p className={`${lora.className} text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
          Republic of the Philippines
        </p>

      {/* Right Logo */}
      <Image
        src="/bp_logo.png"
        alt="BP Logo"
        width={80}
        height={80}
        className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mt-4 md:mt-0"
      />
      </div>
    </div>
  );
}