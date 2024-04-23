import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import CardImage from "./components/CardImage";

const Details = [
  {
    Name: "Barre Instructor",
    Location: "1050 brown street",
    Time: "24 Hour Fitness",
    Update: "5m",
  },
  {
    Name: "Barre Instructor 2",
    Location: "1050 brown street",
    Time: "24 Hour Fitness",
    Update: "5m",
  },
  {
    Name: "Barre Instructor 3",
    Location: "1050 brown street",
    Time: "24 Hour Fitness",
    Update: "5m",
  },
];
const Instructor = [
  {
    Name: "Barre New Instructor",
    Location: "1050 Brown Street",
    Time: "james Anderson",
    Update: "25 Dec",
  },
];
const Exercise = [
  {
    Image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Name: "Dumbbell Front Squats",
    Time: "July 25 2017",
  },
  {
    Image:
      "https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Name: "Running",
    Time: "Dec 25 2017",
  },
];
const jobList = Details.length;
const ExerciseList = Exercise.length;
const InstructorList = Instructor.length;
function App() {
  return (
    <section className="flex bg-[#f3f7fa]">
      <Sidebar></Sidebar>
      <div className="p-6 w-full flex flex-col gap-4">
        <Nav></Nav>
        <Header
          job={jobList}
          article={ExerciseList}
          event={InstructorList}
        ></Header>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <div className="bg-white">
              <p className=" w-full shadow-md shadow-black p-4 my-2">
                Recent Jobs Near Brisbane
              </p>
            </div>
            <div className="overflow-scroll h-[310px] overflow-x-hidden">
              {Details.map((p) => (
                <Main
                  name={p.Name}
                  location={p.Location}
                  time={p.Time}
                  update={p.Update}
                ></Main>
              ))}
            </div>
          </div>
          <div className="w-[55%]">
            <p className=" shadow-md shadow-black p-4 my-2 h-14 bg-white">
              New Instructor Near Brisbane
            </p>
            <div className=" h-[130px] overflow-scroll overflow-x-hidden">
              {Instructor.map((p) => (
                <Main
                  name={p.Name}
                  location={p.Location}
                  time={p.Time}
                  update={p.Update}
                ></Main>
              ))}
            </div>
            <div>
              <p className=" shadow-md shadow-black p-4 my-2 h-14 bg-white">
                Trending Articles
              </p>
              <div className="h-[110px] overflow-scroll overflow-x-hidden">
                {Exercise.map((p) => (
                  <CardImage
                    image={p.Image}
                    name={p.Name}
                    time={p.Time}
                  ></CardImage>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
