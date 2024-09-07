function Profile() {
    return (
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-screen-lg mx-auto">
            <div id="left" className="flex-shrink-0 lg:w-1/5 px-4 py-4 lg:px-6 lg:py-6">
                <img
                    src="personal.jpg"
                    alt="Profile"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <div className="mt-4 text-center lg:text-left">
                    <h2 className="text-xl font-semibold text-gray-800">Subham Behera</h2>
                    <p className="text-sm text-gray-600">Graduated From Silicon University</p>
                </div>
            </div>
            <div id="right" className="lg:w-4/5 px-4 py-4 lg:px-6 lg:py-6">
                <p className="text-gray-800 leading-relaxed">
                My journey in software development began with a deep curiosity about how technology can solve complex problems. Early on, I immersed myself in learning various programming languages and frameworks, which laid the groundwork for my proficiency in both front-end and back-end development. Over the years, I've worked on diverse projects, from building dynamic web applications to implementing secure cloud infrastructures. My experience spans across multiple industries, giving me a unique perspective on how to tailor solutions to meet specific business needs. This history of continuous learning and hands-on experience has shaped me into a versatile developer with a strong problem-solving mindset.
                </p>
                <p className="text-gray-800 leading-relaxed mt-4">
                    As a passionate and driven software developer, I thrive on creating innovative solutions that bridge the gap between technology and real-world needs. With a strong foundation in full-stack development, I excel in working with cutting-edge technologies like React, Tailwind CSS, Java Spring Boot, and MySQL. My expertise extends to designing and implementing robust cloud architectures on platforms such as Azure, where I have successfully managed complex projects involving VNets, load balancers, and database management.
                </p>
                <p className="text-gray-800 leading-relaxed mt-4">
                    In addition to my technical acumen, I am deeply invested in DevOps practices, ensuring seamless integration and deployment processes through tools like Jenkins, Docker, Kubernetes, and Terraform. I am also proficient in setting up comprehensive monitoring and alerting systems using Grafana and Prometheus, making sure that applications run smoothly in production environments.
                </p>
                <p className="text-gray-800 leading-relaxed mt-4">
                    As an active member of a coding club, I contribute to workshops and mentoring sessions, fostering a collaborative learning environment. My attention to detail, combined with a commitment to producing high-quality code, ensures that the projects I work on are not only functional but also scalable and maintainable. I am always eager to take on new challenges and continuously improve my skill set in the ever-evolving tech landscape.
                </p>
            </div>
        </div>
    );
}

export default Profile;
