import Image from 'next/image';

export default function Main() {
    return (
        <div className='flex flex-row space-x-4'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <Image src="https://github.com/henriquebarucco.png" alt="Henrique Barucco" width={100} height={100} className="rounded-full" />
                </div>
            </div>
            <div>
                <h2>Henrique Barucco</h2>
                <p>Desenvolvedor Fullstack</p>
            </div>
        </div>
    );
}