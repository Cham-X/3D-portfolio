import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"


const serviceID = "service_cjaoh7u";
const templateID = "template_xp5krkj";
const publicKey = "YzXVqv-WfojxDY6qt";

const Contact = () => {

    const formRef = useRef()

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: form.name,
                    to_name: "CHAMX",
                    from_email: form.email,
                    to_email: "zakariyyahshamsudeen@gmail.com",
                    message: form.message,
                },
                publicKey,
            )
            setLoading(false)

            setForm({
                name: "",
                email: "",
                message: ""
            })

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col py-9">
                <img src="assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen h-[100%]" />
                <div className="contact-container mt-2">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you&apos;re looking to build a website, improve your existing platform, or bring a unique project to life, I&apos;m here to help
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">FullName</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., Shamsudeen Zakariyyah"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., ShamsudeenZakariyyah@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                className="field-input"
                                placeholder="I wanna give you a job ..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
