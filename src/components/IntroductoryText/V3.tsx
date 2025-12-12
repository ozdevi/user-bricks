import Brick from "../Brick";

export default function IntroductoryText() {
    return (<section>
        <span>
            <strong>This website</strong> will be entirely built on top of your requests. Each request is a brick and construction is on going, <Brick name="defineForever" />
        </span>
        <h2>Where can I put my bricks?</h2>
        <p>
            Very good question! You can send your brick via email: <a href="mailto:sendmybrick@gmail.com">sendmybrick@gmail.com</a>
        </p>
    </section>)
}