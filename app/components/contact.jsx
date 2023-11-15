export default function Contact() {
  return (
    <section
      id="Contact"
      className="bg-black text-white scroll-mt-16 flex flex-col justify-center px-8 py-12"
    >
      <h2 className="border-4 border-white p-4 mb-8 w-max font-bold text-6xl">GET IN TOUCH</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="w-full  bg-white shadow-2xl px-8 pt-6 pb-8"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Your message"
            rows="5"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-contact shadow-sm hover:bg-contact text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
