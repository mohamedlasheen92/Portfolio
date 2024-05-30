import './contact.scss'

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h3 className="text-xl md:text-3xl font-semibold">Contact</h3>
        <p className="mt-3 mb-20 desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          consectetur.
        </p>

        <section className="data flex items-center gap-10">
          <div className="send border-blue-600 grow">
            <form action="">
              <div className="mail">
                <label className='mb-1 block' htmlFor="mail">Email Address:</label>
                <input type="email" id="mail" name="email"  className='outline-none rounded-md'/>
              </div>
              <div className="msg mt-3">
                <label className='mb-1 block' htmlFor="msg">Your Message:</label>
                <textarea name="message" id="msg" className='outline-none rounded-md'></textarea>
              </div>
              <button className='btn mt-5 py-2 px-5 rounded-md transition-transform hover:scale-95 font-medium text-lg'>Send</button>
            </form>
          </div>
          <div className="animate border border-red-600">Animation</div>
        </section>
      </section>
    </>
  );
};

export default Contact;
