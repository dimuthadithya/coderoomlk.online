'use client';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUsers,
  FaArrowRight,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='py-20 bg-base-100' id='contact'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header - Minimal & Clean */}
        <div className='text-center mb-20'>
          <h2 className='text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-4'>
            Contact Us
          </h2>
          <h1 className='text-4xl lg:text-5xl font-black mb-6'>
            Let&apos;s Start a{' '}
            <span className='text-primary'>Conversation</span>
          </h1>
          <p className='text-xl text-base-content/60 max-w-2xl mx-auto font-light leading-relaxed'>
            Whether you have questions about our courses, need career guidance,
            or just want to say hello, we&apos;re here for you.
          </p>
        </div>

        <div className='grid lg:grid-cols-12 gap-12 items-start'>
          {/* Contact Info Column (Left - 5 Cols) */}
          <div className='lg:col-span-5 space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-xl font-bold mb-6'>Direct Channels</h3>

              {/* Support WhatsApp */}
              <a
                href='https://wa.me/94785854468'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-5 p-6 bg-base-100 border border-base-content/10 rounded-2xl hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all group'
              >
                <div className='w-12 h-12 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:bg-success group-hover:text-white transition-colors'>
                  <FaWhatsapp className='text-2xl' />
                </div>
                <div>
                  <h4 className='font-bold text-base'>WhatsApp Support</h4>
                  <p className='text-sm opacity-60'>Chat with our team</p>
                  <p className='text-sm font-semibold mt-1 group-hover:text-success transition-colors'>
                    +94 78 585 4468
                  </p>
                </div>
              </a>

              {/* Course Community */}
              <a
                href='https://chat.whatsapp.com/Lvkuo7WmBDK3h2TxFS7xmd'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-5 p-6 bg-base-100 border border-base-content/10 rounded-2xl hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all group'
              >
                <div className='w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors'>
                  <FaUsers className='text-2xl' />
                </div>
                <div>
                  <h4 className='font-bold text-base'>Student Community</h4>
                  <p className='text-sm opacity-60'>Join 500+ developers</p>
                  <p className='text-sm font-semibold mt-1 group-hover:text-accent transition-colors flex items-center gap-1'>
                    Join Group <FaArrowRight className='text-xs' />
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href='mailto:hello@coderoom.online'
                className='flex items-center gap-5 p-6 bg-base-100 border border-base-content/10 rounded-2xl hover:border-secondary/30 hover:shadow-lg hover:-translate-y-1 transition-all group'
              >
                <div className='w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors'>
                  <FaEnvelope className='text-xl' />
                </div>
                <div>
                  <h4 className='font-bold text-base'>Email Questions</h4>
                  <p className='text-sm opacity-60'>Response within 24h</p>
                  <p className='text-sm font-semibold mt-1 group-hover:text-secondary transition-colors'>
                    hello@coderoom.online
                  </p>
                </div>
              </a>

              {/* Location - Simple Text */}
              <div className='flex items-start gap-5 p-6 border border-transparent opacity-60'>
                <FaMapMarkerAlt className='text-xl mt-1' />
                <div>
                  <h4 className='font-bold text-base'>Based In</h4>
                  <p className='text-sm leading-relaxed'>
                    Kegalle, Sri Lanka
                    <br />
                    Available Worldwide Online
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column (Right - 7 Cols) */}
          <div className='lg:col-span-7'>
            <div className='bg-base-200/50 p-8 md:p-10 rounded-3xl border border-base-content/5'>
              <h3 className='text-2xl font-bold mb-8'>Send a Message</h3>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='form-control w-full'>
                    <label className='label uppercase text-xs font-bold opacity-60'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      placeholder='John Doe'
                      className='input input-lg bg-base-100 border-transparent focus:border-primary focus:outline-none w-full text-base rounded-xl'
                      required
                    />
                  </div>
                  <div className='form-control w-full'>
                    <label className='label uppercase text-xs font-bold opacity-60'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      placeholder='john@example.com'
                      className='input input-lg bg-base-100 border-transparent focus:border-primary focus:outline-none w-full text-base rounded-xl'
                      required
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='form-control w-full'>
                    <label className='label uppercase text-xs font-bold opacity-60'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      placeholder='+94 7X XXX XXXX'
                      className='input input-lg bg-base-100 border-transparent focus:border-primary focus:outline-none w-full text-base rounded-xl'
                    />
                  </div>
                  <div className='form-control w-full'>
                    <label className='label uppercase text-xs font-bold opacity-60'>
                      Interested Item
                    </label>
                    <select
                      className='select select-lg bg-base-100 border-transparent focus:border-primary focus:outline-none w-full text-base rounded-xl font-normal'
                      defaultValue=''
                    >
                      <option value='' disabled>
                        Select a topic
                      </option>
                      <option>Full Stack Course</option>
                      <option>Web Design Helper</option>
                      <option>General Inquiry</option>
                      <option>Support Issue</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>

                <div className='form-control w-full'>
                  <label className='label uppercase text-xs font-bold opacity-60'>
                    Your Message
                  </label>
                  <textarea
                    className='textarea textarea-lg bg-base-100 border-transparent focus:border-primary focus:outline-none w-full text-base min-h-[150px] rounded-xl leading-relaxed'
                    placeholder='How can we help you today?'
                    required
                  ></textarea>
                </div>

                <div className='pt-4'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-lg w-full md:w-auto px-10 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all'
                  >
                    Send Message <FaPaperPlane className='ml-2 text-sm' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
