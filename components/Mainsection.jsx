"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Mainsection = () => {
    const router = useRouter();
     
    return (
        <>

            <div className=" m-0">
                {/* Left part */}
                <div className=" h-screen flex flex-col md:flex-row mx-5
                 p-5 ">
                    <div className="w-1/2 flex  justify-center flex-col ">
                        <div className=" w-5/6">
                            <p className=" text-xl font-medium">The easiest way to book a doctor's appointment.</p>
                            <h1 className="text-4xl font-extrabold uppercase">The best way to get the care you need</h1>
                            <p className=" text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                            <button className=' mt-5 bg-green-500 p-3 text-lg rounded font-bold text-white' 
                            onClick={router.push("")}
                            >
                                Book Appointment</button>
                        </div>


                    </div>

                    {/* Right part */}
                    <div className="w-1/2  align-middle">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/08c1/1cdf/81050882ea067161d8f780927c2fc5c5?Expires=1699833600&Signature=Hd61xtRw4eZjgwVoW3l5Y9SLHQoGU0kbUyhzrZj6~CCqe0QZU1CqzN2lN0b7R7DdojUCH83hqUJMjfAv2PM34DXCfwDB8r9FqO8oRiDElZutM9OuKAxbL8XpcE5jhLAX-3E5FzeZwvuUQa287BG5GiMyuaZg8wlVx9tQ2QhYnb6Lfe9vYVux2yqUb5WOpRsr1cBmiyg-vRSNqSxNap6T7OXJO07IWvZe4FBmDhtNkEoTsOuGe8wVVjNaxbzQQ7k1IxHdF0T0d8IjQegUtPdCURN7nAEcro~PkuRGxFUTcaKz~BpeSmUHIQr3HTGMf3kpm4d6P8Ap636uCPK98hUhAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" // Replace with your image source
                            alt="Hero Image"
                            className="w-screen h-fit object-cover"
                        />
                    </div>
                </div>

            </div>

            {/* second part */}
            <div className=" text-2xl font-medium text-black mx-10 mb-3">
                <h1 className=" mt-0">Why use Arogya Sarthi ?</h1>
                <div className="flex flex-col lg:flex-row gap-x-5  gap-y-4 w-full justify-around ">
                    <div className=' w-4/12 bg-white rounded-xl p-4 gap-y-4 h-32 text-center relative'>

                        <h3 className=" text-lg font-semibold ">Find and Compare local doctors</h3>
                        <p className=" text-sm">Review the doctor profiles and verified credentials before
                            booking an appointment. See real-time availability for in-person
                            or video visits.</p>
                        <div className=" p-3 rounded-full bg-slate-300 w-fit object-bottom absolute -translate-x-1/2 left-1/2 ">
                            <img src="https://s3-alpha-sig.figma.com/img/3bdb/3268/3713519ccc635a2d4a2cec42791f1f0c?Expires=1699833600&Signature=Zm-ExRyvZFFhrsdwVn557KRWjhtSJh8n4R9sRFMAlhsfT6AeSIgYMB5B~ORwCDCyBEU3mzlVHShsjWcSUPP0iS1PorScEz4ilIXU4itLHxAiI5ub5wxCp3whZZYSr0KWkOze9eSkc~3LuMsWeIDG3~YK7ofkGgGfV01v759xAqP5jKlE1dVm1Gyc-ENlJ4dXYGJwQkeTg05GD4QTz8vQwRmjYYwPt8wMFb3VUnyLUDUlskw5~AbzVrOOV5XcdW-n0BxCu8EUARCCMFeQvr4tVEhscPfFzvczzrBUCBLo2Zpqk8ya6lqVvsKlJJWcIOa2x6Sv1vlnkj9EQvaUhc2wNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Ask-Get-answers.web" className=" w-10 h-10" />
                        </div>
                    </div>
                    <div className=' w-4/12 bg-white rounded-xl p-4  h-32 text-center relative'>
                        <h3 className=" text-lg font-semibold ">Have a medical query?</h3>
                        <p className=" text-sm">Share your medical query and we will have the query answered
                            for you from an experienced and verified doctor</p>
                        <div className="p-3 rounded-full bg-slate-300 w-fit object-bottom absolute -translate-x-1/2 left-1/2">
                            <img src="https://s3-alpha-sig.figma.com/img/b8ff/caeb/920e62fa12f69656d3d17ba5da4d8134?Expires=1699833600&Signature=dr84-Lq7BdpQONEVw1RaXz1xboC07BZLSjg4j6SMwMYusIVu2fkddpyS-agPiGPfRDk2RdKTDbV5MS6hmqwcNp7kQqGkWW376D5Qhly66gXTTbqO6e9qGeJKShfFhFa~7--K5ZANxhHITXKTL2wNkgsGl9psmMsMKskw2lsFRct~Y~NcpkMkcFyWNJLby~h-HkQkE1SDN0dNZf82dRDqQlbuUGLCG2o6mU0urhAH3G8Ytx5yxydbPUFxOyoDjXMQNwOMo12K~F1Atyd0upGDV0khfdHDPKi3RKj1SM8izPqncIzlCth-QhQMx59N3Yzlb2wkuwgu~NhlstaFEbArww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Ask-Get-answers.web" className="w-10 h-10 " />
                        </div>
                    </div>
                    <div className='  w-4/12 bg-white rounded-xl p-4 h-32 text-center relative'>
                        <h3 className=" text-lg font-semibold ">Get care anytime, anywhere</h3>
                        <p className=" text-sm">Book appointments in person or online; see the same great
                            doctors from home with a video visit.</p>
                        <div className="p-3 rounded-full bg-slate-300 w-fit object-bottom absolute -translate-x-1/2 left-1/2">
                            <img src="https://s3-alpha-sig.figma.com/img/d1b0/f560/4968a914af8af7721ccbe99f7849e8f4?Expires=1699833600&Signature=KtKMo0Pj4kwPRm22enDin4gwTb-aWBSVMaWc1GATT3xDENzGlsWqaKiO1VkSuNISRI7EoZmp41kdhgkTiAZjyVZXLF9JFzamJnm0Y7kRhPdGk7BbNxYZXLGBWCLTwA1uOGCigaPppNoyqcIp-WpX6LHj8ANzHAmdwamWJsZtNgBAXl~yC2xrfbLFf5MXgwR8-po4jrk-cX5Ky7sYiOHKPXoHMTk0hPdnHwnkytK4rh6VO-KyzKI18dOW-qhgNGfasaUW4X2LyjepSG2uXEOn9rvrF6-gicIaGvqAcPVrHUIStnI-mEiKLN8u93aeYhybizRITT4uEoZ5OGi4Gwryvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Ask-Get-answers.web" className=" w-10 h-10" />
                        </div>
                    </div>
                </div>
            </div>




            <div className="md:flex justify-evenly">
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className="h-56 w-full object-cover md:h-full md:w-full "
                                    src="https://s3-alpha-sig.figma.com/img/52fa/f3b6/b46f61a1fb9000558039ef6f461a0175?Expires=1699833600&Signature=dhJzvl~ipbK3KJfDZ~2x3nog7MXLKa8IoMMKMksNwgl7nuRCqC6KKIn7lCTyzFHU~PNgRyy0UQXJqf3TLXyfX0-yZqZ0RFGQkVJyketPFBU5JKcHNUv2DfGfA9sT8ZMY3~Q-kmqOHevylnsAqf8pKMyDGi2yyQb~4wavEArrkQ8LJcDHQ9Y50J0-8YZ~WYg9Y0cgIi2hC-VTIFoNbYAeLxJpUrAl1sPUucgylqSLhgfgwvRa4MhzK7Vs6Qo7NO0fW5MTKQubdJDC2JTZuUqk9SyaqSATmX5j9-mlsujs-RE-7EEN6R0ghlSde8FL--GFuSvXBmsU72ORZ7tiDzQc3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Instant Video Consultation
                                </a>
                                <p className="mt-2 text-slate-500">Connect within 60 secs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className="h-56 w-full object-cover md:h-full md:w-full "
                                    src="https://s3-alpha-sig.figma.com/img/47f6/e6e7/c972b4d5eda6622a32cd565b85753fd8?Expires=1699833600&Signature=PnC6Z7~wNzWvjPOW43DcnmY~a0MtRLXsYKErvtZqrRbuWxPCP4JnSUCDMwwy3-AoMXt9U8zPN~HI7cVZC~j2y7DIW~o7yQSWT0uwS2vSl9XK0RAaFjvTcpYiIpeku3G~DBYb5SgC1~JUjfWWoTXNqPcEupYzSPRHDth2NhDQkRY4PT9MyJV1iVuDIc39RH4ZQuxx4hayN62L-TCHiZIHa2q5kRiB~~gYjrFnPx~BVRUlWGPMDVqLTpDDXJ8bZX2Kx6Ms-Y-vdzxHsR15nbHo979oytp2PfihKvE5gJ26X78tC1N4qcKOW75qEFTMq~MbPMgT8ObFBmvg0rp66aBDUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Find Doctors Near You
                                </a>
                                <p className="mt-2 text-slate-500">Confirmed appointments</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className=" h-56 w-full object-cover md:h-full md:w-full"
                                    src="https://s3-alpha-sig.figma.com/img/1abc/1f40/07d67ebedaeb1b9665b1ff2942a1c5a8?Expires=1698019200&Signature=lpXxUILmC7z97ppdA5GfvQyeK24rqDdiJhwN0shGVPku6s6Vvs5DwU5qSNzs~SNwvVzZFvhVCW7dEPtswCZ9K8Bo9lgl0PIkgMxFy~NkkOeIEcJJPzObFk4BsnPHbzFy8ikZp5M6gALWA8qZ4CdC~D5dyU-mkYT9wIu8jbw1CZd~Wl6zaFPwvJeA0pWU7sA~Vyslx7AnAlaJs0PQk3MJvPe30jeHzJsoBH3vB9zOgDicHL-X~vKZciY~wJF1zr5nXyiIYgBR3ldVasxTNpruhcaviWnNw4XGtqOHbuSGK-fVUouCKAJY54nE0HOC1CfDHbsOsXmnRNzNqfnvnHZ7Bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Medicines
                                </a>
                                <p className="mt-2 text-slate-500">Essentials at your doorstep</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className="h-56 w-full object-cover md:h-full md:w-full "
                                    src="https://s3-alpha-sig.figma.com/img/c366/6b38/9f5a471bdee6d195e8756cf768d4d1c1?Expires=1698019200&Signature=UfgwdFxnKHUrxWj8It7ZvAsfu5kAGZPqKp3O7xI1Z~Hr9H8m7HFTRfXpKZh~bhFcVDsmlOo1Pc8rK0fhzo3LWfeq6hEwyoRR6Gb6Zw7UKXdmUMP8F8KldSyHq4hJWX6nMBPIaoQ1DSrecR3K5vciUxVjTBsic-07KcQ-aSFePbqF3oYtQAnyotcm580WZdkrmQuQBXjae3zba0uypxq4l7ZMUq-7VfZ2rt5yWilqOJZEa0bf~0R1Ebf8SMAdL1V87yj7XtWlOPNMu0gZGLReQkvEAgME5msZrcZ27r2S-Q3F8dTgpUG5lA8OBXTXfZ-ka0XJCWCyoCWEtEG9cyzp5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Lab Tests
                                </a>
                                <p className="mt-2 text-slate-500">Sample pickup at your home</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className="h-56 w-full object-cover md:h-full md:w-full "
                                    src="https://s3-alpha-sig.figma.com/img/5634/a5bc/4b3407b049bc8585ecae80bba0fe8c09?Expires=1698019200&Signature=f1Xkjf57BfvsmBVpEeSCWsfCVmcRpq1JDgVLHh-WS~OhL6U9sFFrQZw0ahjBg0irOoQ3VxEcXO2GprUVpomQEYb9tNJFEhSHPsvYdLPydno5CwR8Apc5El8idGGNM-yAiw-QwymmB6ycNEigh5v9hwekO6NHBtfBlV6BOzUgSyRKpSRPNZvRWPthpNUXUrZaHP9Ms~YHU2DCYqBUUKtmUORmnX2kDF0Ua~ZWZfQlxwzL9fIQ-65tyOLu3SfYDzZUUpiuxzeZuljb2MfCIhVapo905El0sQ5ASw3gGuSIkT7zpDjz34NssSW3Yi1n~5j2Cm6ZY~hbRaVB8bnMAKEsOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Surgeries{" "}
                                </a>
                                <p className="mt-2 text-slate-500">
                                    Safe and trusted surgery centers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white m-14 rounded-3xl">
                {/*index1*/}
                <div className="">
                    <p className="ms-4  text-xl">
                        Consult top doctors online for any health concern
                    </p>
                    <p className="ms-4 text-slate-500">
                        Private online consultations with verified doctors in all specialists
                    </p>
                    <div className="md:flex justify-evenly">
                        {/*index11*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="text-center">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/0bea/d240/aff5be5e17c4d7b4001460ae2772773d?Expires=1698019200&Signature=Ey4GJglxmc~mm9qdLRXkvaW~w4Wl9pWPR01fvm9ca~k6vPCYnb6w59y3bWrxQ2CAcPZwYvx8VdmPoVkKDftcsJuJRMdN-e4UVKMtW-rIiLWumi5qzM4VBIES37EDxBGmzPn-X1vA2D3hKFHmumFLCq9YJVaNUkpS3421-lP5IHckAUVd2i~aaF57yuXO8-jO3O6PGGZs~Rp5LeRFVkClVzcDOy08cKla7ravDQhalJhUTvXuVLsJMZ2oo6flk9yrgPVviOD288Upzvw1hx6z~HoOAN61eZeu2olIEgwyyLIQEjfQrkVs4ZjSyIDf-Wpg7~OH0F964BhBU6FiOoRN5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Period doubts or Pregnancy
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-red-700 text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index12*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/f3df/4c29/3a85ab735ef0bce66e1fb05dba9b88ea?Expires=1698019200&Signature=jtoznxNaBIvk8tNQkE0m6FlTEOozPrnvkTfU26HxDDDVrnyc18M-EZcpv8DEfnClz89thrlO6iitnwZ1hyD0IN~dXJH~7waHUxGuUUspdTyKK1od1h2UTpQBHzBqnvnMwCIXtY03jNYZ5j3gyw1EvYl-2uJMNq16EI6GODRz0MGFyLqVnBZRhvXDt8O~-PTaau9RU4HPW3y3VZ9ZifOpGP6c5so~WF8KTxB~hmKCew5KNY7UU-uVwyvsv3tSfYBsJE0iYU5WdkU7pj45QcBKZTHIOdN3KbTRHpjeVyd1DlHKwaWanJpB1Us8do1ZHsvKlUd4aMJjJhM4pRXHPeHOYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Acne, pimple or skin issues
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-red-700 text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index13*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/f3df/4c29/3a85ab735ef0bce66e1fb05dba9b88ea?Expires=1698019200&Signature=jtoznxNaBIvk8tNQkE0m6FlTEOozPrnvkTfU26HxDDDVrnyc18M-EZcpv8DEfnClz89thrlO6iitnwZ1hyD0IN~dXJH~7waHUxGuUUspdTyKK1od1h2UTpQBHzBqnvnMwCIXtY03jNYZ5j3gyw1EvYl-2uJMNq16EI6GODRz0MGFyLqVnBZRhvXDt8O~-PTaau9RU4HPW3y3VZ9ZifOpGP6c5so~WF8KTxB~hmKCew5KNY7UU-uVwyvsv3tSfYBsJE0iYU5WdkU7pj45QcBKZTHIOdN3KbTRHpjeVyd1DlHKwaWanJpB1Us8do1ZHsvKlUd4aMJjJhM4pRXHPeHOYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Performance issues in bed
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-red-700 text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index14*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/fc13/25cf/87b91d25b7f1753adeacf741a5205bab?Expires=1698019200&Signature=mlDoa8bTNR57YLRTuZfIL~8NqXn1ypY21eb7ZbK6ox6tlO6zy3hcrV-Q2YSdDjQlbYA9cUOUrkwTSGYz7TL8Cfjk54nT8k7ZOSUuzGR5NCIvvjFq6Oy4itcf4TkYj59iHSVdn3Hx4~DfqbXD2GgzeVVYQtvzkoCrdPJ0uXTvJ4CfP1oMc4cjIG~T6cdU8VXMptzCUZmg92SAt~iEQfuH7c9fjmqri-9bfjlcs~yGdlvs5yNDbUDMxrXoP80o-CGew-q9aNMJs6cvPrs-BC-f4FHprLZAJYXoTkJM5X9J3o5UIRgf2LX228vGpdoiuTPIxQABAZONgEpohZc~nQ-Oeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Cold, cough or fever{" "}
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-red-700 text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index15*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/b374/95f9/8d88321045671d93d8a7b5d5a3cb1282?Expires=1698019200&Signature=nwWDERAMYXxIRuZ8e8dRYBjEDdnfKs3hRc6AMYIy0FCKXPgwkeRsG-0RbNVHTt7NGQpy1cx5TUqAYaPhBqJsWU4IL4JjklqrMV9J0kJpA5h4L0NpakukxgfU8~7qhEhRCA1xOLBCSnFYUWGHiJcZH~HlBB9LpRNh~HCz36v2nxQknSytNJJkTOydKJUMyZGwBL0MiHcd~u2baOZ~MFchFftH8-~ISPaU55~snEIUGqO8cQHV6G0hFG-5pRMicIo2eykiImiOfGyXktythJi5kpW0vSqF804kwY2JdjMC1nLgYzQpk-IfkbHIZSHiKW8gdjzOqwxeybeeCfgcXTzl1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Child not feeling well
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-red-700 text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index16*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/b374/95f9/8d88321045671d93d8a7b5d5a3cb1282?Expires=1698019200&Signature=nwWDERAMYXxIRuZ8e8dRYBjEDdnfKs3hRc6AMYIy0FCKXPgwkeRsG-0RbNVHTt7NGQpy1cx5TUqAYaPhBqJsWU4IL4JjklqrMV9J0kJpA5h4L0NpakukxgfU8~7qhEhRCA1xOLBCSnFYUWGHiJcZH~HlBB9LpRNh~HCz36v2nxQknSytNJJkTOydKJUMyZGwBL0MiHcd~u2baOZ~MFchFftH8-~ISPaU55~snEIUGqO8cQHV6G0hFG-5pRMicIo2eykiImiOfGyXktythJi5kpW0vSqF804kwY2JdjMC1nLgYzQpk-IfkbHIZSHiKW8gdjzOqwxeybeeCfgcXTzl1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Depression or anxiety
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-red-700 text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*index2*/}
                <div className="">
                    <p className="ms-4 text-xl">
                        Book an appointment for an in-clinic consultation
                    </p>
                    <p className="ms-4 text-slate-500">
                        Find experienced doctors across all specialties
                    </p>
                    <div className="md:flex justify-evenly">
                        {/*index21*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/e16b/1f95/9af287c155074fb2ada4f54dbed6bfb1?Expires=1698019200&Signature=D4ZvuNlCY-7R6AZvZVqd1lbjOaKN0yg9tvJ1och0W-hi-0RsV1rH8ixClyvVj7IghrqI-qRN5Xz7W2h1gAfK2JltvFWVjrnZcefSSuC-JeqzidcLB3PD2vWS5nU-8dzaPs-CseyNcOBwAXxAltHBLO4QNsqGBADsRfrhKQeb0rraHLi0M2XPpuXXOZBelKWcs9fQbSdhin2QFN0Hw3HXIeOArj7e5M7RtaypZGwSpxmCH6PFQyUWUB-eEnMUCjFdAchmPclyxgrNLf697E2VbALgRZTd3SOLntAZjJwlN9ytYEeQPYzEtiid7j1cJZ2nrqAyzwEqTQGldTRTO4mzag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            Dentist
                                        </a>
                                        <p className="mt-2 text-slate-500  text-xs">
                                            {" "}
                                            Teething troubles? Schedule a dental checkup
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index22*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/7033/f01f/1f5a010e41a671708eeca8153bde8fe0?Expires=1698019200&Signature=iy5BCCBJQjlmZUehXPy9kEr5pYRVsL~z1pMXdDvkOTm53aeE2rWd2RlmffBu7B2Ngw102UBl8guO5vvifQLvuCEonKls1WIDUVQ72DU~mSejb4vetAllv1zDZPqwzwo4RAA1B1ZLbfxnfOYbHfNPgV~yKqFUDGt47oNa~80vam6aHaLRllU~YaLOTJ7iKDcuSjQkrCl7Mxwf3IxGvwpSSVFrAMoAcPJLnRJZVnrU0QiTfs-RxWDaWARXAuJsgPe~i-hYRO7pxjLh-1-4FjoVJNu5iPk0jycIeSq9j0J60fYbD0aBX6hrypXcFrNr85wxFtqDCWs-nHiW3hWHm6uHXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            {" "}
                                            Gynecologist/Obstetrician
                                        </a>
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Explore for women’s health, pregnancy and infertility
                                            treatments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index23*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/4ffa/6496/a5ea96b439d76d15f7fefe3d0c2d7d27?Expires=1698019200&Signature=Xh42vhjJZqTwTMknvPfMilYuoV89SCgMd1YSAWdupdsJe3OpTAbY3v6s1BBni34ahonAQTH7msWO8wZvCvLM0QRmTxDCKqibJGjsGIKMHNhxB8HtMQKby~xsOZvLSWD49qxw9Gs15dSuJhbfZrYNPirljJ~mNof64XVNy16JYHM1-BC4EdJhoK7U5z0f4jnf7mnUqQh896wquZwS2ahS67pH5LaJmluydAwFh4uLSuro7o4-KNA7iQ2LDc~FHnm~~gLINYDKLCwZOKId26LZhf4z6FxUAtLyxKR8-bDNYOr0jENACdJTyjSIafT9ia7fbNJi5nxRErHGkg6T5veOUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            {" "}
                                            Dietitian/Nutrition{" "}
                                        </a>
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Get guidance on eating right, weight management and sports
                                            nutrition
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index24*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/759f/1c95/ee2fc83fe1b1970bf50be3becb15303a?Expires=1698019200&Signature=bQrpZSqg~VqzA67iH5EWX2EW1RKmqd9ECiapC-BrHjsq2fNh6j1ZWcGWzviktqslZcyUt1aUldkvr8e4lgcyK9-a6Q2wyn9CGIgXKxSGVh14xUPNez2fwRG6pAgdpfMoV4ubDVtzJFNJ6qCJW65dSghZi~p0J-7Ub3wb68gkmRjaQ6b5s8LO~2Ot6sl8~9lYbU8xe4koMg4dFWnHAK5ZsPxnkygu2XCyJuBQKFTQ8BtYrhB4nEPSUNUwJhekHTuWQnRxeeGpTLcPhBIAiv71XxKiVBHURpb0zTzbhTw6ys7FFqdHjKgXbVX0yrKff~1rAeDTHiEMBGe2~q0kGoAT7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            {" "}
                                            Physiotherapist{" "}
                                        </a>
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Pulled a muscle? Get it treated by a trained physiotherapist
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*index3*/}
                <div className="">
                    <div className="md:flex justify-evenly border-t-2 border-slate-400">
                        {/*index31*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="mt-10">
                                    <div>
                                        <p className="block mt-1 text-sm font-medium  text-black">
                                            Read top articles from health experts
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p className=" text-slate-500  text-xs">
                                            Health articles that keep you informed about good health
                                            practices and achieve your goals.
                                        </p>
                                        <button className="bg-green-600 text-center text-xs text-white font-bold mt-2 rounded-xl text-base p-2 hover:bg-green-300 hover:text-black dark:bg-red-300">
                                            see all articles
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index32*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-56 w-56 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/1d8a/d120/818d1193d44405897b2f36713a316282?Expires=1698019200&Signature=peBZXG4vTeCm-eL6TzHtlBRjnvgRSxMM1PUHNYTeGXgD9UPtHQ5DeAgLqH5bk8gvRIgp8HNW87f2jgb5rFSaDcOe6WtdK7uhssQT8ncfVHcTI-5q8IZ5BTauyI4QB5S9FVnhsiJzlHUZRDufZOZIIZk4t74nuMup-MTNHCHflvU23zaRT-7rmvZMH2oAhjLz02tmJBEetA61EFv1CznvqAN~Gsvo5yiGfZN42CzAXFtO7OChvFXGKc09b6Wd3pmxAfhblT8ZG0DQPJEq2Pq7nSi~5wsP0MYdOkBLEBgxlXlSB1x4AQyd3XqHZCIgySFXbA7HdowpCuOrpr7pgjyqvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium  text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            Coronavirus{" "}
                                        </a>
                                        <p className="mt-2  text-xs">
                                            12 Coronavirus Myths and Facts That You Should Be Aware Of
                                        </p>
                                        <p className="text-slate-500">Dr. Diana Borgio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index33*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-56 w-56 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/5dbd/2d48/bf94e0072f1da07c6d1f6c685fcbf86a?Expires=1698019200&Signature=h810-6HyafwkskqbSOOUinflvXZMsTOGbMcJMqJFr4WT6xHfvqMpOn9FFnWYxI-UOt7US24-Lj3xy5kngZ~ERirEwtyxJisd0l7E9nXeOKScphnjJ8RTd6UuG78-gQtsutzl38s4T3DAosk8Y2h2wrJ3CwXNk67GgXVEaaipLE4Nor4CUgp0T9kVxWgbuVwAAI6cmpZD6P4m8EjcEVr5ohU7KlkUr7FogFJ-R3TvJS-5CBgWHzUspTEgrj4nc9LLBYIG6Bt0j0h-mhk6keX7QYkUuGqGq~bZjIGcU-6XKchnqbeMpffZY~VgTkL~VWISFnR7E~CGWSlePq-PVqWonA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium  text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            Vitamins and Supplements{" "}
                                        </a>
                                        <p className="mt-2  text-xs">
                                            Eating Right to Build Immunity Against Cold and Viral
                                            Infections
                                        </p>
                                        <p className="text-slate-500">Dr. Diana Borgio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*how it works*/}
            <div className="md:flex ">
                <div className="ms-20">
                    <p className="font-bold text-xl">How it works</p>
                    <div className="flex">
                        <img
                            className="h-16 w-16 object-cover mt-3 bg-white   rounded-full "
                            src="https://s3-alpha-sig.figma.com/img/6840/9b55/871f5514eaea9af66c738ae82b10f413?Expires=1698019200&Signature=SF4RJZTEUktjpvAshnzRcZHA2bWldT7JTxvmqHlSmxuFUYIWv0BJIun2epRJ3JI9NKDL3PUTaiKWuusfHapZA51a3rFAAq96yXun~AoZmO~40LPglU1l76upCEHXePamCn-lTrp5PRFf8SezutwKdRhwCAHYxxX51LskEIbDbRNO7iuGf3AlM6xnbtuYKeFCRH7RyDOY5JBVoRKmslpe73wL56RvN6tO0qCbkb4enxEg73Gk3UjZ05zEWj~uDgKjTPjlQBe6I7vXCilypvL4Yx41m5can~EkOaVyV7QAdVW0VNab6D4F9Do8tlLtiIO1BB6hNSHt0UOUzr4y9S2dqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="img"
                        />
                        <div className="ms-8">
                            <p className="text-xl">Create an Account</p>
                            <p className="text-slate-600">Create your profile on our site</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img
                            className="h-16 w-16 object-cover mt-3  rounded-full "
                            src="https://s3-alpha-sig.figma.com/img/7c6b/8af6/653a5b1bc46db283c7b85dcf644a5421?Expires=1698019200&Signature=H-ZJciKdwj0Eq4GdCpmJXusqvvjtSwx3Ue56qlZDumKTw5yp9c6tNezZcgbQwlkxKGDmGTS8PJ1gQKaWXIMLJpOR3evPtKUy15Z~OqYEnmSiXbmVY0-u-aohk2Hj5Rv7UEQscEybLjYw317DIfVi2RyqDgTsFVauGJGfmHIr~sGmdkeY2veFvJS2XirikUD4S03HVzio4YQIlbXsf6isPnoh8g~lUBGU34a0f4L6a43PPm~ZG3M0TKNtlHS27WntwYH3f9-PrcSJvx2Gb~a5i3K2lstcbiL5Q6qhBg8sTPClSkBEMJttTbwhoyYLOUvCVDML01DLUroOWTqiLTIHcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="img"
                        />
                        <div className="ms-8">
                            <p className="text-xl ">Search for Doctor</p>
                            <p className="text-slate-600">
                                Look for qualified doctors based on your location and needs
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <img
                            className="h-16 w-16 object-cover mt-3  rounded-full "
                            src="https://s3-alpha-sig.figma.com/img/951f/8b5a/00ac2968f08fb757761f9aa2dd72e0e3?Expires=1698019200&Signature=IVefdxtTboJrswRAQbyPhDmJaTM5ybsrFpKGBleawG9G1gPjgUltoe8RV3wWUNgKbxTZexruG~W0G5EGQci~E4dQn54GjAWgKCz7fHoJDa3lshLVg6v8D8Bu6z8fgfn9P~4vxUcSV5CCCc2tSemK6q3DcdmRJHrhBMC9fUWRZThM2tZET7VGkPJX8ZT4eG9PVQJxnfdnIf9nbUQlcIE7kA30216wy5cYzIyjiHJyVmhK4hdqwXDTI6WQkn93jCGNE9~brxT3f3XgiNBhUkNu8zscBsrnmGBq3D11VopqRP8qWy53gA3Zq8~MlIoIUJeuDgWBYwFmeFoUTgLS7kxMbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="img"
                        />
                        <div className="ms-8">
                            <p className="text-xl ">Schedule an Appointment</p>
                            <p className="text-slate-600">
                                Schedule in person or online appointment, and share your document
                                before the appointment
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        className="h-full w-72 object-cover md:ms-52 mt-6 md:mt-0 ms-20  md:h-full md:w-72 rounded-xl "
                        src="https://s3-alpha-sig.figma.com/img/f0bf/de6e/3a5edb7c45e3f8c98a55e9bc3a3c51de?Expires=1698019200&Signature=Grid0ab66KQ36RYpj4gQl-JfhFyrLDOt~RBGVClJFiUMv6EwhtK1SI4d2BSZIU8xfubFLRQYbSKoGUk-y9QJxHSNpadnIEHDF6pOlkW5P42krHLHAEGzQLZi5ome0~fz1MFlt-xkpj2htIhy-kYfFR04P-w1MALW5BBAo4mMogABlSulH8VNCHwnR6lXk-c-U3KxYC2V7V0eySExoihPEz0QZwbdWNzbwDNOUAvS-xMa4QWfm1Mg0gnON0V5WAM~Doaty84tlyXqK1BiHuApqIS13bbWBLuRCPIkdwssMdWGLUWSnCLNfEZtMpB4p-h9uoM~yxCFbCnoJ6vgv3rIIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="img"
                    />
                </div>
            </div>
            {/*are you a doctor*/}
            <div className="bg-orange-200 md:flex mt-20 ">
                <div>
                    <img
                        className=" pt-10 ms-20 h-full w-56 object-cover  md:h-full md:w-44 rounded-xl "
                        src="https://s3-alpha-sig.figma.com/img/f6da/a524/496b10ff4ad945938eb1df0ac4f66830?Expires=1698019200&Signature=B2Z9fxOBhT7hqB-SuWMQ6ahwHLlyLbGF3zFNzzT82d9CLz4fNFb~m8QLtGeg1ZQXkz2wlGVYzudXLOHsx4G0PEoN4URV0i2swPg6r8ot4AmUaOCaYutW5mGtmn38U44yXYTB8PL-sFAi8kDrm6hDeyM2iJMwWEHfYw3WBiwBLueUcix9uhvhTsPa-6cq~JYql8UpuO-5S3mWH0-wu79f7IvuRJcqOjCUu11ZXlUOv0~DL2-xqXLlMhbMvf5KlA4PWWnNe0dcZleLuc~B1Vifo2Cz0U4CLrGiTG2ZFq5qgcSEIyJj49j~m7F1QZtEKM4k4D3utMZ6XCY62eA5jKg5Tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="img"
                    />
                </div>
                <div className="ms-20 me-20 mt-10 pb-10 ">
                    <p className="text-xl">Are You A Doctor?</p>
                    <p>
                        Doctors who claim their free DocIndia profile connect 2X more with
                        upright patients. Your future patients are ready to connect. Make sure
                        your profile stands out. Learn more about how to claim your free .
                        DocIndia profile and our available upgrades.
                    </p>
                    <button className="bg-white text-center px-8 text-slate-950 font-bold mt-2 rounded-xl text-base p-2 hover:bg-slate-600 hover:text-white dark:bg-red-300">
                        see all articles
                    </button>
                </div>
            </div>
            {/*our popular features include*/}
            <div className=" mt-5">
                <p className="text-center font-bold text-2xl mb-4">
                    Our popular features include4
                </p>
                <p className="text-center font-bold text-xl">Current features</p>
                <div className="md:flex justify-evenly ">
                    {/*index31*/}
                    <div className="mt-5">
                        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-72 ">
                            <div className="">
                                <div>
                                    <p
                                        className="block mb-4 mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                        href="#"
                                    >
                                        Digital Profile
                                    </p>
                                    <img
                                        className="h-16 w-16 object-cover ms-8  rounded-xl "
                                        src="https://s3-alpha-sig.figma.com/img/09e9/d99c/d5757edc2d08584049211eff83bf17a5?Expires=1698019200&Signature=A0unl6hAe~pk50cqE250kd0KnNRqa~3gDGoXRUmTaEqk3kOxgs4c-o96II7heynvoTpGWbQUk8UEO8BffEMu~JyaAJXckjJd4m-lLT3XBDZIRSCmjxWO4PiDyjn3nLvo6AYkcKr8p49OgSQIn8F5FATiYwrYWbbniFkwJqrmOb8F8M33z~4RlqfH70cmVwGyORGw8vpfq2czk24J-Qu-5~PF8If7kDs~6oC2TBxsZrOwNcB8pi2OLmdZxkHoLuENDZJ~MYzzMmvP84VOQu5SWICOKwX0MVZHEPI1YUYWtVBcNpp5HBN7sNq8lNc6zU9U6FCeBHUTzSbUdNyLVDtECA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                        alt="img"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Searchable online doctor profile
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Credential Verification with Verified Batch
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Showcasing your practice location for walk-in Appointments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*index32*/}
                    <div className="mt-5">
                        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-72 ">
                            <div className="">
                                <div>
                                    <p
                                        className="block mb-4 mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                        href="#"
                                    >
                                        Online scheduling
                                    </p>
                                    <img
                                        className="h-16 w-16 object-cover ms-8  rounded-xl "
                                        src="https://s3-alpha-sig.figma.com/img/2de3/005f/5358b207cf2847cc599d70a21a99bcd6?Expires=1698019200&Signature=Mhb5FGUODCLJFbTSDnsX2ZWz~6olMZ5TQ07~eZV~yCBJ7QR-VOXmqzAkje6iBLALeR5IngyO7VZzY6Kw8DiS1zizPCgxFZw8M1VPYq2GlRgIIi7hiQYqaDcC6fKDU9MrFHiSsToD7yUb1Jpzl0D0Eg6mUG9p8gVMGUzuyVJUxzHEt0d5Of6SG1aSluKHdJZfZv9Bctb5flVMWHrPJaJl1YC2BiKqSDXFjX9k3oqtWWM-52bdgR7YtAjt4jDuv4tCV3UfNfSjjI6BKC-IpdjgSVUMRCgIG4HPdtkGrimKQTl~qgUVs3uxZOTmE5ULG5zk52wNnR7ikdEJUeuKiaFwzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                        alt="img"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Organize your calendar
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Take online appointments
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Accept reports and patient documents online before the
                                            appointment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*index33*/}
                    <div className="mt-5">
                        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-72 ">
                            <div className="">
                                <div>
                                    <p
                                        className="block mb-4 mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                        href="#"
                                    >
                                        Digital Awareness
                                    </p>
                                    <img
                                        className="h-16 w-16 object-cover ms-5  rounded-xl "
                                        src="https://s3-alpha-sig.figma.com/img/0578/01f4/c31e14b9a868813f73d6eb9a6a96f622?Expires=1698019200&Signature=k4aPTVlk54gEtXeXYLi1CN20DDJPbhuUaXRffqhY0CS79HS0E9IZlUSEXH0ERq81uLJqPTUoXbGSh~KZ1Ly3lj2ptn-ZI0Vckx41EexxozbRx5oEYw8QFdjsUaz1wMhvRrNqamZGjyRCsVfOdQb5EZIxW3zco57RIZp-iLpRJWlu7pHKVWv1z53IeIgQyNtZyPIM1zJwC1YtRI3hOMdFMAVI3oBGLFwtQA0ZdjdviNpCE6Df378MmUPHALMp-CPV9Ws~eF6I1S3gSqh83mw72zKvNXBvnHjoPQ4sAQ3cIvGVid~vraGuXd7QCfi97Ej2~WajsQpRui5OBeBqmuGssg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                        alt="img"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Publish medical articles about your interest with us
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Let us know the topics and we will work with you to create the
                                            articles
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="h-5 "
                                            src="https://s3-alpha-sig.figma.com/img/d93c/fc70/74398694054a9c881f492ef03742addc?Expires=1698019200&Signature=c8TweGW4dZ1TOlQE-FkNuEdKa5RtOi-d4RIscNZIeqUem7cQGZ8DKGyVOV6yzDQiGGROG~HFOajWmMX644kqDjXPNHcqSICaTe0mJIo~XDeduYOo81cff2zhKPLTroC8Mx8R5JuyWEXW3tXM0vqS7GGb1IgbiTFPB9td-y0udmj0qtH~TARJZjd3o294km3C8pvF8LxV-FjhRCeWZ1627V4YVzgeQckFx0GzNojL0EcfoEtrAmwJrLtbryc5Q9nAockBZLgcCLEu7rnLfx5pAIP29JYB76YadKUfCORrTMXOWaB226BokQpziFeb9~QspSuyo080y8wekdjFxd1cQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt=""
                                        />
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Articles are shared on social platform
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*up coming features*/}
            <div className="">
                <p className="text-center mt-6 text-slate-800 font-bold text-xl">
                    Upcoming features
                </p>
                <div className="md:flex justify-evenly mb-6">
                    {/*index31*/}
                    <div className="mt-3">
                        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-72 ">
                            <div className="mt-5">
                                <div>
                                    <p className="ms-5">E-Prescription</p>
                                </div>
                                <div className="p-2 pb-4">
                                    <p className=" text-slate-500 text-center text-xs">
                                        rescribe your medicines online at the comfort of your home
                                        offices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*index31*/}
                    <div className="mt-3">
                        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-72 ">
                            <div className="mt-5">
                                <div>
                                    <p className="ms-5">Rating &amp; Review</p>
                                </div>
                                <div className="p-2 pb-4">
                                    <p className=" text-slate-500 text-center text-xs">
                                        mprove you rating by sending review request to your patients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*index31*/}
                    <div className="mt-3">
                        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-72 ">
                            <div className="mt-5">
                                <div>
                                    <p className="ms-5">Patient Management</p>
                                </div>
                                <div className="p-2 pb-4">
                                    <p className=" text-slate-500 text-center text-xs">
                                        ets patients subscribe to your newsletter. Send them important
                                        messages about your practice location or upcoming changes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Mainsection;
