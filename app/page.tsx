import Link from 'next/link';
import { inter } from '@/app/ui/fonts';
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
          src="/pgg_center.png"
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Overlay Buttons in Top-Right Corner */}
        <div className="absolute top-0 right-0 z-10 p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition md:text-base"
            >
              LOGIN
            </Link>
            <Link
              href="/signup"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-sm font-medium text-white hover:bg-green-500 transition md:text-base"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </main>
    {/* <footer className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"> Wednesday</footer> */}
  </>
}
