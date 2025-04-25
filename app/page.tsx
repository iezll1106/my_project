import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inter, lora } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';
import Header from '@/app/ui/header';
 
export const metadata: Metadata = {
  title: 'HCH',
};

export default function Page() {
  return <>
    <Header />

    <main className={`${inter.className} relative h-screen w-full overflow-hidden`}>
        {/* Full-Screen Hero Image */}
        <Image
          src="/handmade3.png"
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
          <div className="backdrop-blur-md rounded-lg p-8 md:p-12 max-w-xl text-center shadow-lg">
            <p className={`${lora.className} text-2xl md:text-4xl font-bold text-purple-900 italic mb-4`}>
              &quot;Discover the Art of Handmade Where Creativity Meets Craftsmanship!&quot;
            </p>
            <p className="text-purple-900 text-sm md:text-lg mb-6">
              🌿 Unique. Authentic. Handcrafted with Love. 🌿
            </p>

            <div className="flex flex-col gap-4 md:flex-row justify-center mt-6">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition md:text-base"
              >
                LOGIN <ArrowRightIcon className="w-5" />
              </Link>
              <Link
                href="/signup"
                className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-sm font-medium text-white hover:bg-green-500 transition md:text-base"
              >
                Create an Account <ArrowRightIcon className="w-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    {/* <footer className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"> Wednesday</footer> */}
  </>
}
