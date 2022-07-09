// types
import type { NextPage } from 'next'

// components
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import AboutCard from '../components/aboutCard'

// styles
// icons
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'

const people = [
    {
        name: 'Abheek Dhawan',
        role: 'Coach',
        bio: "An avid programmer, Abheek competed in FLL for 4 years, achieving the Champion's Award in 2019 at the Razorback Invitational. He has continued with his robotics journey as a programmer for the Ladue HWHS FRC team.",
        links: [
            {
                link: 'https://github.com/ADawesomeguy',
                node: (
                    <FaGithub className="inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50" />
                ),
            },
            {
                link: 'https://instagram.com/abheek_dhawan',
                node: (
                    <FaInstagram className="inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50" />
                ),
            },
            {
                link: 'mailto:abheekd@protonmail.com',
                node: (
                    <FaEnvelope className="inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50" />
                ),
            },
        ],
    },
    {
        name: 'Aric Wang',
        role: 'Coach',
        bio: "Aric Wang is a 16-year-old rising junior at LHWHS. In his freetime, he enjoys playing piano, drawing, and playing online videogames with his friends. He participated in FLL for 3 years, achieving the Champion's Award in 2019 at the Razorback Invitational.",
    },
    {
        name: 'Will Feng',
        role: 'Coach',
        bio: 'Will Feng, a rising junior at LHWHS, is a dedicated programmer who enjoys challenges and problem solving. He plays water polo and participates in many clubs and activities. He hopes one day to become a engineer.',
    },
    {
        name: 'Samuel Wiseman',
        role: 'Coach',
        bio: '',
    },
]

const About: NextPage = () => {
    return (
        <Layout active="home">
            <div
                id="about"
                className="flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all"
            >
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
            <div
                id="learn-more"
                className="flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all"
            >
                <h1 className="block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3">
                    What do we do?
                </h1>
                <p className="block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3">
                    We provide programming coaching to participants and members
                    of all skill levels.
                </p>
                <div className="grid grid-cols-2 grid-rows-3 gap-4">
                    <div className="flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <h1 className="text-2xl md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-md my-auto">
                            Beginner
                        </h1>
                    </div>
                    <div className="flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <p className="text-md max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg sm:text-md my-auto">
                            Beginners will start by learning basic programming
                            concepts such as variables and functions, as well as
                            their usages and applications which can be built
                            upon in future sessions.
                        </p>
                    </div>
                    <div className="flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <p className="text-md max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg sm:text-md my-auto">
                            Intermediate programmers will expand their knowledge
                            by learning concepts further targeting the SPIKE
                            PRIME robots themselves, such as movement and
                            sensing, while continuing to use concepts from
                            previously learned topics.
                        </p>
                    </div>
                    <div className="flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <h1 className="text-2xl md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-md my-auto">
                            Intermediate
                        </h1>
                    </div>
                    <div className="flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <h1 className="text-2xl md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-md my-auto">
                            Advanced
                        </h1>
                    </div>
                    <div className="flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-2xl rounded-lg text-center px-2 py-2 md:py-8">
                        <p className="text-md max-w-sm md:max-w-md lg:max-w-lg sm:text-md my-auto">
                            Older, more experienced programmers will be able to
                            explore more of the mathematical side of programming
                            by learning basic physics and vector calculations
                            that can be applied and reused in their code.
                        </p>
                    </div>
                </div>
            </div>
            <div
                id="get-started"
                className="flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all"
            >
                <h1 className="block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3">
                    How does it work?
                </h1>
                <p className="block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3">
                    See how you can take advantage of the free services provided
                    by our experienced alumni!
                </p>
                <div className="flex flex-col justify-center flex-wrap rounded-xl p-4 mb-4 text-slate-700 dark:text-slate-50">
                    <div className="flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left my-3 md:my-5">
                        <div className="opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-cyan-500 via-cyan-400 to-blue-500 p-3">
                            1
                        </div>
                        <div className="flex-auto md:max-w-lg lg:max-w-2xl">
                            <h5 className="no-underline font-bold text-lg md:text-xl lg:text-2xl">
                                Contact us!
                            </h5>
                            <p className="text-md md:text-lg">
                                You can contact us through this website, by{' '}
                                <a>phone</a>, or through our{' '}
                                <a href="mailto:contact@fllstl.codes">email</a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left my-3 md:my-5">
                        <div className="opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-blue-600 via-indigo-500 to-purple-500 p-3">
                            2
                        </div>
                        <div className="flex-auto md:max-w-lg lg:max-w-2xl">
                            <h5 className="no-underline font-bold text-lg md:text-xl lg:text-2xl">
                                Coordinate
                            </h5>
                            <p className="text-md md:text-lg">
                                We will respond as soon as possible to work out
                                specifics such as time, as well as take any
                                questions.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left my-3 md:my-5">
                        <div className="opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-purple-500 via-red-400 to-orange-500 p-3">
                            3
                        </div>
                        <div className="flex-auto md:max-w-lg lg:max-w-2xl">
                            <h5 className="no-underline font-bold text-lg md:text-xl lg:text-2xl">
                                Coaching
                            </h5>
                            <p className="text-md md:text-lg">
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
            <div
                id="contact"
                className="flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all"
            >
                <h1 className="block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-5">
                    Contact
                </h1>

                <form
                    action="/api/contact"
                    method="post"
                    className="flex flex-col grow sm:max-w-md md:max-w-lg lg:max-w-xl"
                >
                    <div className="mb-6">
                        <input
                            type="text"
                            name="personName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="personEmail"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <select
                            name="inquiryReason"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        >
                            <option value="Beginner coaching">
                                Beginner Programming Coaching
                            </option>
                            <option value="Intermediate coaching">
                                Intermediate Programming Coaching
                            </option>
                            <option value="Advanced coaching">
                                Advanced Programming Coaching
                            </option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <textarea
                            placeholder="Inquiry"
                            name="inquiryData"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    />
                </form>
            </div>
        </Layout>
    )
}

export default About
