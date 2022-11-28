import React from 'react';
import toast from 'react-hot-toast';

const Footer = () => {
    const handleNewsLetter = event => {
        event.preventDefault();
        const form = event.target;
        const newsLetterEmail = form.email?.value;
        fetch('https://time-craft-server-side.vercel.app/newsLetterEmails', {
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
                    <span className="footer-title">Technology</span>
                    <a className="link link-hover">React.js</a>
                    <a className="link link-hover">MongoDB</a>
                    <a className="link link-hover">Express.js</a>
                    <a className="link link-hover">Node.js</a>
                </div>
                <div>
                    <span className="footer-title">Sources</span>
                    <a className="link link-hover">TailwindCSS</a>
                    <a className="link link-hover">DaisyUI</a>
                    <a className="link link-hover">Merakiui</a>
                    <a className="link link-hover">Stripe.js</a>
                </div>
                <div>
                    <span className="footer-title">Pages</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Dashboard</a>
                    <a className="link link-hover">Blog</a>
                </div>
                <div>
                    <span className="footer-title">Subscribe for Newsletter</span>
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