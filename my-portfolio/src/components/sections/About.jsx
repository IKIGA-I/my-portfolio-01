import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const embeddedSkills = [
        "Arduino", 
        "STM32", 
        "ESP-32", 
        "IOT",
        "Embedded-C",
        "C++",
        "DSA"
    ];

    const vlsiSkills = [
        "Verilog",
        "System Verilog",
        "Testbench",
        "UVM",
        "Cadence Incisive"
    ];
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> About Me</h2>
            
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Hi, I’m <b>Golam Rahman</b>, an Electrical and Electronics Engineer with a growing passion for <b>embedded systems and Linux driver development</b>.<br /><br />  
                        I graduated from <b>Xiamen University Malaysia</b> and have worked with <b>ESP32, Arduino, and Verilog for digital design verification</b>.<br /><br />  

                        I started my career in <b>VLSI design verification</b>, but I’ve realized that I’m more drawn to low-level programming and hardware-software integration.<br />  
                        Now, I’m focusing on <b>C programming, Linux kernel development, and embedded systems</b> as I prepare for my <b>Master’s in Electrical and Electronics Engineering at the University of Auckland</b>.<br /><br />  

                        I love solving real-world problems with technology, and I’m always looking for ways to build and improve things.<br />  
                        Whether it’s working on personal projects, participating in hackathons, or just exploring new ideas, I’m always eager to learn and grow.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Embedded </h3>
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
                            <h3 className="text-xl font-bold mb-4">VLSI </h3>
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
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 📚 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Bachelor of Electrical and Electronics Engineering with Honours - Xiamen University Malaysia (2020-2024)</strong>
                            </li>
                            <li>
                                Relevant Coursework: Embedded Systems, C Programming, Digital System Design, DSP and Robotics
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Trainee Design Verification Engineer at Ulkasemi .Ltd</h4>
                                <p>Developing test plans and testbench architectures to test different RTL designs using UVM. 
                                    Designing a testbench design using System Verilog for a simple APB RTL design
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold"> Intern at Swift Bridge Technologies Sdn Bhd</h4>
                                <p>Drafting PIRs (Part Inspection Reports) and FA (First Article) Report.
                                    High-Frequency Cable Prototype Assembly and Design
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