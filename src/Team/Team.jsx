import React from "react";
import "./style.css";
import himanshu from "./img/himanshu.jpeg";
import akash from "./img/akash.jpeg";
import anurag from "./img/anurag.jpeg";
import chetan from "./img/chetan.jpeg";
import gaurav from "./img/gaurav.jpeg";
import mayank from "./img/mayank.jpeg";
import nikhil from "./img/nikhil.jpeg";
import rishabh from "./img/rishabh.jpeg";
import sharan from "./img/sharan.jpeg";
import shivang from "./img/shivang.jpeg";
import shubham from "./img/shubham.jpeg";
import shubhi from "./img/shubhi.jpeg";
import sidd from "./img/sidd.jpeg";
import suransh from "./img/suransh.jpeg";
import vasu from "./img/vasu.jpeg";

const Team = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="heading-title text-center mt-4">
          <h1 className="text-uppercase">Our Team</h1>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={himanshu}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Himanshu Ahuja is a senior year CS undergrad at DTU. He is
                    an avid researcher in computational neuroscience, statistics
                    and optimisation techniques and working towards developing
                    intelligent architectures and encoding procedures inspired
                    by perception, memory and cognition in the human brain. His
                    co-initiative under Optima is to help young minds see
                    through the fad surrounding machine learning.
                  </p>
                </div>
                <div className="s-link">
                  <a href="http://ahujahimanshu.com">
                    <i className="fa fa-globe" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Himanshu Ahuja</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={vasu}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Vasudev Singh is a pursuing Computer Engineering at Delhi
                    Technological University. He's a tech geek and his interests
                    like in machine learning and developing backends. He likes
                    to spend his free time either reading books or playing FIFA.
                  </p>
                </div>
                <div className="s-link">
                  <a href="https://in.linkedin.com/in/vasu-dev">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="https://github.com/vasu-dev">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Vasudev Singh</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={shubhi}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Shubhi Sareen is a Senior Year Computer Engineering
                    Undergraduate at Delhi Technological University. In times,
                    when we have an access to enormous amount of data in the
                    form of words, texts, and images, she wants to explore more
                    on how this can be used to make meaningful interpretations
                    about the world around us.Besides being a tech-savvy person,
                    she loves to spend her time in painting and travelling!
                  </p>
                </div>
                <div className="s-link">
                  <a href="#">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Shubhi Sareen</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={chetan}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Chetan Gupta is pursuing Computer Engineering, at Delhi
                    Technological University, currently in his senior year. His
                    interests include algorithms, machine learning and
                    developing robust backend systems. All things tech intrigue
                    him greatly.
                  </p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Chetan Gupta</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={anurag}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover scroll">
                <div className="desk">
                  <p>
                    Anurag Malyala, Computer Science Undergrad, Aspiring
                    neuroscience and computer vision researcher, 5/7 dank. He is
                    a technological enthusiast with an equal amount of love for
                    hardware and software.He enjoys toying around with machine
                    learning and tech in general. His quirks are visible in his
                    work and beyond with rather unconventional uses for tech.
                    Optima is the perfect platform to make machine learning
                    accesible and enjoyable and he wishes to keep it that way.
                  </p>
                </div>
                <div className="s-link">
                  <a href="https://IsCoelacanth.github.io">
                    <i className="fa fa-globe" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Anurag Malyala</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={sidd}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Siddharth Nayyar a Computer Science undergrad at Delhi
                    Technological University. He is an expert programmer and
                    have command over several programming languages. His areas
                    of interest are Machine Learning, Deep Learning, Parallel
                    Programming, Data Structure, Algorithms and Mathematics, all
                    of which I have been working with. He is also a hardware
                    enthusiast.
                  </p>
                </div>
                <div className="s-link">
                  <a href="https://sdnr1.github.io/">
                    <i className="fa fa-globe" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Siddharth Nayyar</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={mayank}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Mayank is a pre-final year undergraduate student at Delhi
                    Technological University. He is an open source enthusiast
                    and loves to innovate. He is a hackathon freak and has
                    attended more than 20 hackathons. He has deep interest in AI
                    and ML and loves teaching students and giving talks about
                    the same. His Mac is always overflowing with stickers :P
                  </p>
                </div>
                <div className="s-link">
                  <a href="https://www.linkedin.com/in/mayank-tripathi-a49563126/">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="https://github.com/mayank408">
                    <i className="fa fa-github" />
                  </a>
                  <a href="https://medium.com/@mayank408">
                    <i className="fa fa-medium" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Mayank Tripathi</h5>
              <span>3rd Year, DTU</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={suransh}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Suransh is a Computer Science undergrad at Delhi
                    Technological University. He is a fun loving person and a
                    Techie. Having a decent experience in Sport Programming,
                    Full stack web development and Deep Learning, he likes
                    solving problems and building cool projects using the same.
                    He is also an active blogger on Medium. Besides this, he is
                    a huge cricket fan with great Badminton skills.
                  </p>
                </div>
                <div className="s-link">
                  <a href="https://medium.com/@suransh2008">
                    <i className="fa fa-medium" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Suransh Chopra</h5>
              <span>3rd Year, DTU</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={shivang}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Shivang is a huge tech geek with experience in the fields of
                    Augmented Reality, Unity3D Game Development, Machine
                    Learning, Android Development and Competitive Programming.
                    He is currently pursuing his B.Tech in Computer Science from
                    Delhi Technological University. He is also an active blogger
                    and a huge fitness freak. All this is complemented with a
                    never ending love for bikes.
                  </p>
                </div>
                <div className="s-link">
                  <a href="https://medium.com/@shivangchopra11">
                    <i className="fa fa-medium" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Shivang Chopra</h5>
              <span>3rd Year, DTU</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={sharan}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Sharan is a Computer Science undergrad at Delhi
                    Technological University. His interests include deep
                    learning, data structures, algorithms and mathematics. Apart
                    from those, he spends a lot of time on anime and music.
                  </p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Sharan G</h5>
              <span>3rd Year, DTU</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={gaurav}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Gaurav is a junior computer science major at Delhi
                    Technological University. He is a curious learner, and ideas
                    like Computer Vision and AI intrigue him. His enthusiasm is
                    reflected by his determination to solve challenging problems
                    in these fields. Apart from this, he has tried his hand at
                    almost every sport, and can probably chatter about football
                    forever.
                  </p>
                </div>
                <div className="s-link">
                  <a href="https://www.linkedin.com/in/gaurav-jain-38b207134/">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Gaurav Jain</h5>
              <span>3rd Year, DTU</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={akash}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    AAKASH-- He can fall asleep anywhere and anytime. Doesnt
                    matter if a thousand men troop is marching in front of him,
                    He can still go zzzzzzz! In his NOT-SO- PRODUCTIVE time, he
                    is seen in making poor attempts at cracking jokes or rather
                    being the “victim” of a joke and spending hours trying to
                    figure out which new oil to use for better skin! He takes
                    immense pride in the development of AI in medical industry
                    and shows it by tackling new problems of the domain.
                  </p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Akaash Saboo</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={rishabh}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Rishabh jain is pursuing computer engineering from Delhi
                    Technological university. He has great interest in maths,
                    competetive programming and machine learning. He likes to
                    share facts and knowledge he knows with others. He is always
                    ready for constructive criticism and improving himself.
                  </p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Rishabh Jain</h5>
              <span>3rd Year, DTU</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={nikhil}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Nikhil is a final year undergraduate at DTU, He is an avid
                    pythonista who loves to create utilities and automate the
                    boring stuff. He has an avid interest for data gathering,
                    analysis and visualization too. His current research
                    interests encompass NLP, social networks, recommendor
                    systems, video data mining, etc. He also maintains his own
                    YouTube channel and blog which goes by the name "Indian
                    Pythonista".
                  </p>
                </div>
                <div className="s-link">
                  <a href="http://indianpythonista.tech">
                    <i className="fa fa-globe" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Nikhil Kumar Singh</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-member">
              <div className="team-img">
                <img
                  src={shubham}
                  className="img-responsive"
                  style={{ width: "360px", height: "350px" }}
                />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <p>
                    Shubham Rastogi, a final year student researching and
                    exploring the filed of machine learning and cognitive
                    intelligence for the past two years. He has developed the
                    knowledge and skills for basic machine learning and deep
                    learning concepts and have specialized in their application
                    to Data Science, Computer Vision, Time Series Analysis and
                    Reinforcement Learning. Through Optima, He wish to share my
                    knowledge and experience in using these techniques for
                    real-life Applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Shubham Rastogi</h5>
              <span>4th Year, DTU</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Team;
