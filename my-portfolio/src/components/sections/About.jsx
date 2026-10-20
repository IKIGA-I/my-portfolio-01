
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const embeddedSkills = [
        "Arduino",
        "STM32",
        "ESP32",
        "Raspberry Pi",
        "Embedded C",
        "C++",
        "Python",
        "GPIO",
        "UART / RS485",
        "Wi-Fi",
        "OTA",
        "Linux",
        "KiCad",
        "PCB Design"
    ];

    const vlsiSkills = [
        "Verilog",
        "SystemVerilog",
        "Testbench",
        "UVM",
        "RTL Verification",
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
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                        <p className="text-gray-300 mb-6">
                            Hi, I'm <b>Golam Rahman</b>, an Electrical and Electronics
                            Engineer with a <b>Master of Engineering Studies from
                            the University of Auckland</b>.<br /><br />

                            I'm passionate about <b>embedded systems, firmware
                            development, and hardware-software integration</b>.
                            I enjoy working close to the hardware, developing
                            firmware, and troubleshooting electronic systems
                            to understand how they work.<br /><br />

                            At <b>Escape HQ</b>, I work on developing and maintaining
                            embedded control systems for interactive puzzle
                            experiences. My work involves <b>Raspberry Pi,
                            ESP32, Arduino, GPIO, and TypeScript-based server
                            applications</b>, including replacing legacy control
                            software and integrating microcontrollers with
                            centralised control systems.<br /><br />

                            Alongside my professional work, I'm exploring
                            <b> bare-metal firmware development</b> through
                            projects such as my ATmega32U4 MacroPad, focusing
                            on low-level programming, GPIO control, and
                            microcontroller peripherals.<br /><br />

                            My earlier experience in <b>VLSI design verification</b>
                            introduced me to Verilog, SystemVerilog, UVM, and
                            testbench development. I'm particularly interested
                            in opportunities involving <b>embedded firmware,
                            electronics development, PCB design, and hardware
                            bring-up</b>.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Embedded Systems
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {embeddedSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    VLSI
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {vlsiSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                            <h3 className="text-xl font-bold mb-4">
                                📚 Education
                            </h3>

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>
                                        Bachelor of Electrical and Electronics
                                        Engineering with Honours - Xiamen
                                        University Malaysia (2020-2024)
                                    </strong>
                                    <p className="mt-2">
                                        Relevant Coursework: Embedded Systems,
                                        C Programming, Digital System Design,
                                        DSP and Robotics.
                                    </p>
                                </li>

                                <li>
                                    <strong>
                                        Master of Engineering Studies (EEE) -
                                        University of Auckland (2025-2026)
                                    </strong>
                                    <p className="mt-2">
                                        Completed July 2026.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>

                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Embedded Systems Development - Escape HQ
                                    </h4>
                                    <p>
                                        Developing and maintaining embedded
                                        control systems for interactive escape
                                        room puzzles using Raspberry Pi,
                                        ESP32, and Arduino. Working on
                                        TypeScript-based control servers,
                                        hardware integration, GPIO control,
                                        WebSocket communication, and OTA
                                        firmware updates.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Trainee Design Verification Engineer
                                        - Ulkasemi Ltd.
                                    </h4>
                                    <p>
                                        Developed test plans and testbench
                                        architectures for RTL verification
                                        using SystemVerilog and UVM.
                                        Worked on testbench development for
                                        a simple APB RTL design.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Intern - Swift Bridge Technologies Sdn Bhd
                                    </h4>
                                    <p>
                                        Prepared Part Inspection Reports
                                        (PIRs) and First Article (FA) reports.
                                        Assisted with high-frequency cable
                                        prototype assembly and design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
