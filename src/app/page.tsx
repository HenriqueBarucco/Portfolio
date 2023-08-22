import Main from '@/components/main';

export default function Home() {
    return (
        <main className='flex justify-center items-center h-auto'>
            <div className='flex flex-col items-center'>
                <Main/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-bounce w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </main>
    );
}
