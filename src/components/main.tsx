import Image from 'next/image';
import LinesEffect from './effects/lines';

export default function Main({name, title}: {name: string, title: string}) {    
    return (
        <div className='flex flex-row space-x-4 items-center h-[calc(100vh-20px)] justify-center'>
            <LinesEffect />
            <div className="avatar">
                <div className="w-44 rounded-full ring-offset-8">
                    <Image src="/avatar.jpeg" alt="Henrique Barucco" width={512} height={512} className="rounded-full" />
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold'>{name}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
}