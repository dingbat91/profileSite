import Image from "next/image";
import styles from "./homepage.module.css";

export default function Home() {
	return (
		<>
			<h1>Welcome</h1>
			<p>
				This is the website for Matthew Hanson, a junior web developer based in
				Shildon, County Durham.
			</p>
			<p>
				I am a junior web developer coming out of being a long term carer for my
				father and I am looking to enter the web development industry with
				passion and enthusiasm.
			</p>
			<p>
				I have a passion for learning and I am always looking to learn new and
				exciting technologies and techniques. This website is a showcase of my
				skills and abilities as I learn and grow as a developer. Technologies
				included in this website include:
			</p>
			<ul>
				<li>Next.js</li>
				<li>React</li>
				<li>Typescript</li>
				<li>Storybook</li>
				<li>Node.js</li>
			</ul>
		</>
	);
}
