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
    const [status, setStatus] = useState("")

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        setStatus("")
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
            setStatus("Thanks. Your enquiry is on its way.")

            setForm({
                name: "",
                email: "",
                message: ""
            })

        } catch (error) {
            setLoading(false)
            setStatus("Something went wrong. Please email me directly instead.")
            console.log(error)
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col py-9">
                <img src="assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen h-[100%] opacity-60" />
                <div className="contact-container mt-2">
                    <p className="eyebrow">Contact</p>
                    <h3 className="head-text">Let&apos;s build your next product milestone</h3>
                    <p className="text-lg text-slate-300 mt-3">
                        Need a senior engineer to turn strategy into a reliable product experience? I help teams design, ship, and scale digital products with strong engineering discipline and product thinking.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-6">
                        <label className="space-y-3">
                            <span className="field-label">Full name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="e.g. Jane Doe"
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
                                placeholder="e.g. jane@company.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Project brief</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                className="field-input"
                                placeholder="Tell me about your goals, timeline, and what success looks like."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send inquiry"}
                            <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                        {status && <p className="form-status" role="status">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
