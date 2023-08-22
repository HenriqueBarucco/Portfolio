import Image from 'next/image';

export default function Main() {
    return (
        <div className='flex flex-row space-x-4 items-center'>
            <div className="avatar">
                <div className="w-44 rounded-full">
                    <Image src="/avatar.jpeg" alt="Henrique Barucco" width={100} height={100} className="rounded-full" />
                </div>
            </div>
            <div>
                <h2 className='text-4xl'>Henrique Barucco</h2>
                <p>Desenvolvedor Fullstack</p>
            </div>
        </div>
    );
}