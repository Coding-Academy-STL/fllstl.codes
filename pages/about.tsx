import Navbar from '../components/navbar'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import AboutCard from '../components/aboutCard'

const people = [
    {
        name: 'Abheek Dhawan',
        role: 'Coach',
        bio: `An avid programmer, Abheek competed in FLL for 4 years, including achieving the Champion's Award in 2019 at the Razorback Invitational.
              He has continued with his robotics journey as a programmer for the Ladue HWHS FRC team.`,
        links: [{ link: 'https://github.com/ADawesomeguy', name: 'GitHub' }],
    },
    {
        name: 'Aric Wang',
        role: 'Coach',
        bio: `A cool guy.`,
    },
    {
        name: 'Will Feng',
        role: 'Coach',
        bio: 'Professional Roblox scammer.',
    },
    {
        name: 'Samuel Wiseman',
        role: 'Coach',
        bio: '"What does a boolean mean???"',
    },
]

const About: NextPage = () => {
    return (
        <Layout active="about">
            <div className="flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all">
                <h1 className="block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3">
                    Meet our team!
                </h1>
                <p className="block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3">
                    We are composed of high school volunteers dedicated to
                    helping others learn.
                </p>
                {people.map((p, idx) => (
                    <AboutCard
                        key={idx}
                        name={p.name}
                        role={p.role}
                        bio={p.bio}
                        links={p.links}
                    />
                ))}
            </div>
            <div className="flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all">
                <h1 className="block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3">
                    What do we do?
                </h1>
                <p className="block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3">
                    We provide programming coaching to participants and members
                    of all skill levels.
                </p>
                <div className="grid grid-cols-2 grid-rows-3 gap-4">
                    <div className="flex flex-col bg-white shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <h1 className="text-2xl md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold text-gray-800 sm:text-md my-auto">
                            Beginner
                        </h1>
                    </div>
                    <div className="flex flex-col bg-white shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <p className="text-md max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg text-gray-800 sm:text-md my-auto">
                            Beginners will start by learning basic programming
                            concepts such as variables and functions, as well as
                            their usages and applications which can be built
                            upon in future sessions.
                        </p>
                    </div>
                    <div className="flex flex-col bg-white shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <p className="text-md max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg text-gray-800 sm:text-md my-auto">
                            Intermediate programmers will expand their knowledge
                            by learning concepts further targeting the SPIKE
                            PRIME robots themselves, such as movement and
                            sensing, while continuing to use concepts from
                            previously learned topics.
                        </p>
                    </div>
                    <div className="flex flex-col bg-white shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <h1 className="text-2xl md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold text-gray-800 sm:text-md my-auto">
                            Intermediate
                        </h1>
                    </div>
                    <div className="flex flex-col bg-white shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <h1 className="text-2xl md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold text-gray-800 sm:text-md my-auto">
                            Advanced
                        </h1>
                    </div>
                    <div className="flex flex-col bg-white shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <p className="text-md max-w-sm md:max-w-md lg:max-w-lg text-gray-800 sm:text-md my-auto">
                            Older, more experienced programmers will be able to
                            explore more of the mathematical side of programming
                            by learning basic physics and vector calculations
                            that can be applied and reused in their code.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all">
                <h1 className="block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3">
                    How does it work?
                </h1>
                <p className="block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3">
                    See how you can take advantage of our free services provided
                    by experienced alumni!
                </p>
                <div className="flex flex-col justify-center flex-wrap rounded-xl p-4 mb-4 text-slate-700 dark:text-slate-50">
                    <div className="flex flex-row items-start space-x-4 my-3 md:my-5">
                        <div className="opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-cyan-500 via-cyan-400 to-blue-500 p-3">
                            1
                        </div>
                        <div className="flex-auto md:max-w-lg lg:max-w-2xl">
                            <h5 className="no-underline font-bold md:text-xl lg:text-2xl">
                                Contact us!
                            </h5>
                            <p className="text-sm md:text-lg">
                                You can contact us through this website, our
                                phone, or our email.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start space-x-4 my-3 md:my-5">
                        <div className="opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-blue-600 via-indigo-500 to-purple-500 p-3">
                            2
                        </div>
                        <div className="flex-auto md:max-w-lg lg:max-w-2xl">
                            <h5 className="no-underline font-bold md:text-xl lg:text-2xl">
                                Coordinate
                            </h5>
                            <p className="text-sm md:text-lg">
                                We will respond as soon as possible to work out
                                specifics such as time, as well as take any
                                questions.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start space-x-4 my-3 md:my-5">
                        <div className="opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-purple-500 via-red-400 to-orange-500 p-3">
                            3
                        </div>
                        <div className="flex-auto md:max-w-lg lg:max-w-2xl">
                            <h5 className="no-underline font-bold md:text-xl lg:text-2xl">Coaching</h5>
                            <p className="text-sm md:text-lg">
                                Once everything has been decided, one of our
                                qualified teachers will come to help the team
                                members learn programming interactively and
                                effectively. Once finished, we will always be
                                available to talk more and provide further
                                support and assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
