import Image from "next/image";

export default function AboutMe() {
  return (
      <main>
        <h1>About me</h1>
        <section>
          <Image
            className="myphoto"
            src="/img/myphoto.jpg"
            alt="A picture of me"
            width={150}
            height={150}
            priority
          />
          <p>I am a software developer with experience in systems administration and infrastructure, combining strong technical expertise with a practical understanding of how reliable systems support successful products.</p>
          <p>Before moving into technology, I spent over ten years working in customer-facing retail roles. During this time, I developed strong communication, problem-solving, teamwork, and customer service skills. This experience gave me a solid foundation in working with people, understanding user needs, and handling real-world, fast-paced environments—skills I continue to apply in my technical career.</p>
          <p>My journey into IT began in systems administration and infrastructure, where I gained experience managing systems, supporting users, resolving technical issues, and maintaining business-critical services. Over time, my focus shifted toward software development, leading me into a hybrid role where I develop full-stack web applications while also managing company infrastructure, systems, and IT operations.</p>
          <p>Most recently, I completed a Master’s degree in Video Games and Virtual Reality, expanding my skills in game development, interactive experiences, and immersive technologies. This has further strengthened my interest in building engaging, well-designed software that blends creativity with solid engineering.</p>
          <p>Today, my main interests are game development and web development, where I can combine my development skills, systems knowledge, and user-focused mindset to build high-quality products. I enjoy learning new technologies, solving complex problems, and contributing across the full lifecycle of a project, from infrastructure and deployment to development and user experience.</p>
        </section>
      </main>
  );
}