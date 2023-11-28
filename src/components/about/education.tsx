export default function Education({educations}: {educations: {title: string, school: string, startDate: string, endDate: string}[]}) {
    return (
        <div className='flex flex-row'>
            <div className='w-[160px] pr-4'>
                <p className='text-1xl font-bold text-end'>EDUCAÇÃO</p>
            </div>
            <div className='flex-1 space-y-4' >
                {educations.map((education, index) => (
                
                    <div className='flex flex-col' key={index}>
                        <div className='flex flex-row w-full'>
                            <p className='font-bold text-start'>{education.school}</p>
                            <p className='grow text-end'>{education.startDate} - {education.endDate}</p>
                        </div>
                        <div>
                            <p className='text-start'>{education.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}