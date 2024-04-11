import { Row, Col } from 'tailwindcss'

export default function AboutPage() {
    return (
        <>
        <Row className="mt-lg-4">
            <Col>
            
            </Col>
            <Col lg={8} xs={12} className='m-auto'>
                <h2 className='mb-4'>About me</h2>
                <p className='h5' style={{ lineHeight:'1.5'}}>
                    Hello, my name is Tyler Knapp and I am a full-stack developer with a Bachelor of Science degree in Biology. 
                    My background is in biological, genetic, and optical laboratories.
                    Currently, I'm an eager full-stack developer with a certificate in full-stack web development from
                    Rice University. Among my full-stack work includes a collaborative food quiz that helps users
                    decide what food to eat based various choices, an application back end for an e-commerce site built
                    to take a working Express.js API and configure it to use Sequelize to interact with a MySQL database, a
                    full-stack application where developers can publish blog posts and comments on other developers'
                    posts as well, and a collaborative application which allows users to write and share their reviews about the books they've read 
                    while letting users pair their reviews with the perfect wine selection.
                </p>
            </Col>
        </Row>
        </>
    );
}