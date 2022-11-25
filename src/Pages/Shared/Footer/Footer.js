import React from 'react';
import toast from 'react-hot-toast';

const Footer = () => {
    const handleNewsLetter = event => {
        event.preventDefault();
        const form = event.target;
        const newsLetterEmail = form.email?.value;
        fetch('http://localhost:5000/newsLetterEmails', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email : newsLetterEmail
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    toast.success(`You will receive daily updates in ${newsLetterEmail}`)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <footer className="bg-base-200">
            <div className='container mx-auto footer p-10 text-base-content"'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <form className="relative" onSubmit={handleNewsLetter}>
                            <input name="email" type="email" placeholder="email@tc.com" className="input input-bordered w-full pr-16" required />
                            <input name="submit" type="submit" className="btn btn-primary absolute top-0 right-0 rounded-l-none" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;