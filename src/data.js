export const projects = [
  {
    title: "3D Ping-Pong on FPGA Board",
    subtitle: "Arduino and Processing",
    description:
      "Ping pong game writen for the Nios-II processor on DE!-SOC. I wrote the graphics engine in C, which\
      used a 3D coordinate system, and basic raytracing algorithms to project the 3D objects onto\
      a 2D plane. I also implemented background music using interupts, to ensure that music could \
      play while graphics was being processed.\
      Click here to view the Github.",
    image: "./3DPingPong.png",
    link: "https://github.com/LancelotShih/bingpong",
  },
  {
    title: "Undergraduate Research Project on Computer Generated Machine Learning Datasets (Completed)",
    subtitle: "Unreal Engine, Pytorch ",
    description:
      "The project was based on improving boating safety with object detection models that can detect obstacles in water. Using Unreal Engine, I wrote scripts to generate customizable, randomized annotated datasets.\
      Click here to read the documentation.",
    image: "./project_1.png",
    link: "https://docs.google.com/document/d/1b8M_J-tMApZmvTunMwTcVlnVO5pEIh_f8IE6obFjS30/edit?usp=sharing",
  },
  {
    title: "Speedy Fingies - Arcade Game",
    subtitle: "Arduino ",
    description:
      "A game where users tap a sensor in time with dots displayed on an LED matrix. Build using an Arduino.\
      Click here to view the Devpost",
    image: "./project_2.jpg",
    link: "https://devpost.com/software/speedyfingies",
  },
  {
    title: "FPGA Rhythm Game (completed)",
    subtitle: "Verilog",
    description:
      "A rhythm game built on the DE1-SOC board. The project includes VGA display, access to on baord RAM, and input from a ps2 keyboard. I worked on audio encoding/decoding and integration of the components.",
    image: "./project_3.jpeg",
    link: "",
  },
  {
    title: "Speedy Fingies 2.0",
    subtitle: "Arduino and Processing",
    description:
      "Rhythm game using Arduino, LED Matrix driver, and Processing to interface to computer speakers. \
      Click here to view the Devpost",
    image: "./project_4.jpeg",
    link: "https://devpost.com/software/speedy-fingies-2-0",
  },
  
];


export const skills = [
  "C++ Object Oriented Programming",
  "Arduino/microcontroller programming",
  "Verilog",
  "Robotics",
  "Machine learning optimization",
  "CUDA Programming",
  "C", 
  "Python",
  "Assembly (Nios II)"
];
