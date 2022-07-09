import Image from 'next/image';
import Link from 'next/link';

export default function Card({ titleText, subtitleText, descriptionText, image, links } : { titleText : string, subtitleText : string, descriptionText : string, image : string, links?: Array<Record<string, string>> }) {
    return (
        <div className="flex flex-col max-w-sm rounded-md overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-50 transition-all my-2 sm:m-3 md:m-4 lg:m-5">
            <Image src={image} width='612' height='612' alt='' />
            <div className="px-6 py-4">
                <div className="mb-2">
                    <h1 className='font-bold text-xl'>{titleText}</h1>
                    <span className='text-slate-500'>{subtitleText}</span>
                </div>
                <p className="text-gray-700 text-base">
                    {descriptionText}
                </p>
            </div>
            <div className="flex flex-col grow px-6 pt-4 pb-2">
                <div className='flex flex-row mt-auto'>
                    {links?.map((l, idx) => (
                        <Link key={idx} href={l.link}>
                            <a><span className="inline-block bg-gray-200 border border-slate-900 dark:border-none rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{l.name}</span></a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
