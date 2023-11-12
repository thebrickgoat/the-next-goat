export default function Contact() {
    return (
        <section id="Contact" className="flex flex-col items-center justify-center m-8 ">
            <h2 className='pb-8 font-bold text-6xl'>CONTACT</h2>
            <form className="w-full  bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="5"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-contact hover:bg-contact text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </section>
    )
};