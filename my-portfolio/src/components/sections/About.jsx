
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const embeddedSkills = [
        "Embedded C",
        "C++",
        "ATmega32U4",
        "STM32",
        "ESP32",
        "Arduino",
        "Raspberry Pi",
        "GPIO",
        "UART / RS485",
        "Wi-Fi & OTA",
        "Bare-Metal Firmware",
        "Linux"
    ];

    const vlsiSkills = [
        "Verilog",
        "SystemVerilog",
        "UVM",
        "RTL Verification",
        "Testbench Design",
        "APB Protocol",
        "Cadence Incisive"
    ];

    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
            
                <div className="rounded-xl p-8 border-white/10 border-2 hover:-translate-y-1 transition-all hover:border-blue-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition">
                    <p className="text-gray-300 mb-6">
                        Hi, I'm <b>Golam Rahman</b>, an Electrical and Electronics Engineer with a
                        <b> Master of Engineering Studies in Electrical and Electronics Engineering
                        from the University of Auckland</b>.<br /><br />

                        My primary interest is <b>embedded systems and firmware development</b>,
                        particularly the interaction between hardware and software. I enjoy working
                        close to the hardware, developing firmware, integrating electronics, and
                        troubleshooting systems to understand how they work in real-world conditions.<br /><br />

                        In my current work at <b>Escape HQ</b>, I develop and maintain embedded
                        control systems for interactive puzzle experiences. This involves working
                        with <b>Raspberry Pi, ESP32, Arduino, GPIO, serial communication, and
                        TypeScript-based server applications</b>. I've been involved in replacing
                        legacy control software, integrating microcontrollers with server-side
                        applications, implementing ESP32 over-the-air updates, and developing
                        reliable hardware-software interactions.<br /><br />

                        Alongside this practical experience, I'm developing my understanding of
                        <b> bare-metal firmware and low-level programming</b> through personal
                        projects, including a custom MacroPad built around the ATmega32U4. My
                        earlier experience in <b>VLSI design verification</b> also gave me exposure
                        to Verilog, SystemVerilog, UVM, and testbench development.<br /><br />

                        I'm interested in opportunities where I can contribute to
                        <b> embedded firmware, electronics development, PCB design, and hardware
                        bring-up</b>, while continuing to grow as an engineer who can work across
                        both hardware and software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Embedded Systems</h3>
                            <div className="flex flex-wrap gap-2">
                                {embeddedSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadown-[0_2px_8px_rgba(59, 130,246,0.2)] transition
                                                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Digital Design & Verification</h3>
                            <div className="flex flex-wrap gap-2">
                                {vlsiSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadown-[0_2px_8px_rgba(59, 130,2246,0.2)] transition
                                                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 
                                    hover:shadown-[0_2px_8px_rgba(59, 130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">📚 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>
                                    Bachelor of Electrical and Electronics Engineering with Honours
                                    — Xiamen University Malaysia (2020–2024)
                                </strong>
                                <ul className="list-disc list-inside ml-4 mt-2">
                                    <li>
                                        Relevant areas: Embedded Systems, C Programming, Digital
                                        System Design, Digital Signal Processing, and Robotics.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>
                                    Master of Engineering Studies in Electrical and Electronics
                                    Engineering — University of Auckland (2025–2026)
                                </strong>
                                <ul className="list-disc list-inside ml-4 mt-2">
                                    <li>
                                        Completed in July 2026.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 
                                    hover:shadown-[0_2px_8px_rgba(59, 130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Embedded Systems & Control Development — Escape HQ
                                </h4>
                                <p>
                                    Develop and maintain embedded control systems for interactive
                                    puzzle experiences using Raspberry Pi, ESP32, Arduino, and
                                    server-side applications. Work on replacing legacy control
                                    software, integrating hardware with TypeScript-based services,
                                    implementing OTA firmware updates, and troubleshooting
                                    communication and hardware integration issues.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Trainee Design Verification Engineer — Ulkasemi
                                </h4>
                                <p>
                                    Worked on RTL design verification using SystemVerilog and UVM,
                                    including developing test plans, testbench architectures, and
                                    a testbench for a simple APB RTL design.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Intern — Swift Bridge Technologies Sdn Bhd
                                </h4>
                                <p>
                                    Assisted with high-frequency cable prototype assembly and
                                    design, and prepared Part Inspection Reports (PIRs) and
                                    First Article (FA) reports.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>    
        </section>
    );
}
