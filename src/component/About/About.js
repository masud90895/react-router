import React from 'react';

const About = () => {
    return (
        
<div style={{marginTop:'20px'}} className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto p-4">
    <div className="flex justify-end px-4 pt-4">
        <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" /* style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 242px);" */ style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(0px, 242px)'}}>
            <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img style={{width:'50%'}} className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://scontent.fcla1-1.fna.fbcdn.net/v/t39.30808-6/279708430_1659635594395792_4500931700679949317_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=3hj2tHLuZOMAX9B85-a&_nc_ht=scontent.fcla1-1.fna&oh=00_AT9L-TAmMBLwPq4ObKS0h7tUxMqywTDTL9cvCFd2RTIAIA&oe=633FF7E8" alt="md Masud Rana"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Md mahafujur Rahaman Masud</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="https://www.facebook.com/masud90895" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target={'_blank'}>Add friend</a>
            <a href="https://www.facebook.com/masud90895" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" target={'_blank'}>Message</a>
        </div>
    </div>
</div>

    );
};

export default About;