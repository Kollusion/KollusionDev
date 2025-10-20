import React from 'react';
import { XIcon, MinusIcon, MoveDiagonalIcon } from 'lucide-react';
import Image from 'next/image';

interface Props {
    src: string
    className?: string
}

const ScreenCard = ({ src, className }: Props) => {
    return (
        <div className={'w-full bg-card rounded-2xl duration-500 overflow-clip active:scale-99 ' + className}>
            <div className='w-full py-1 px-3 bg-accent flex justify-between items-center active:cursor-grabbing hover:cursor-grab'>
                <div className='flex gap-1'>
                    <div className='bg-red-500/80 w-3 h-3 rounded-full flex items-center justify-center cursor-pointer'><XIcon className='size-2 opacity-70' /></div>
                    <div className='bg-yellow-500/80 w-3 h-3 rounded-full flex items-center justify-center cursor-pointer'><MinusIcon className='size-2 opacity-70' /></div>
                    <div className='bg-green-500/80 w-3 h-3 rounded-full flex items-center justify-center cursor-pointer'><MoveDiagonalIcon className='size-2 opacity-70' /></div>
                </div>
            </div>
            <div className='w-full h-full'>
                <Image src={src} alt='' width={1200} height={800} className='w-full'></Image>
                {/* <iframe src='https://google.com' className='w-full h-100'></iframe> */}
            </div>
        </div>
    );
};

export default ScreenCard;