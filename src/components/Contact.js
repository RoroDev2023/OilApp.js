import React from 'react'

function Contact() {
  return (
    <>  
        <section class="bg-[url('https://wallpaperaccess.com/full/505837.jpg')] bg-cover">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-white font-serif">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">Got a technical issue? Need details about our Business plan? Let us know.</p>
                <form action="#" class="space-y-8 bg-[#111827] p-8 rounded-2xl">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-white ">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-white">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-white">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                    </div>
                    <button type="submit" class="bg-[#1e90ff] py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
                </form>
            </div> 
        </section>
    </>
  )
}

export default Contact