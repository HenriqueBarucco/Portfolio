import AboutMe from '@/components/about-me';
import Education from '@/components/education';
import Experiences from '@/components/experiences';
import Main from '@/components/main';
import Skills from '@/components/skills';

export default function Home() {
    return (
        <div className='grow'>
            <div className='flex flex-col items-center h-full'>
                <Main/> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-bounce w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
                <div className='flex bg-base-200 w-full justify-center items-center py-4'>
                    <div className='flex flex-col w-3/6 justify-center space-y-4' id='sobre'>
                        <AboutMe/>
                        <Skills/>
                        <Experiences/>
                        <Education/>
                    </div>
                </div>
            </div>
        </div>
    );
}
