import Image from 'next/image';

export default function Main() {
    return (
        <div className='flex flex-row space-x-4 items-center h-[calc(100vh-20px)] justify-center'>
            <div className="avatar">
                <div className="w-44 rounded-full ring-offset-8">
                    <Image src="/avatar.jpeg" alt="Henrique Barucco" width={512} height={512} className="rounded-full" />
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold'>Henrique Barucco</h2>
                <p>Desenvolvedor Fullstack</p>
            </div>
        </div>
    );
}