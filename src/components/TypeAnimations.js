import { TypeAnimation } from 'react-type-animation'

const NameAnimation = () => {
    return (
        <TypeAnimation
            sequence={["Hi, My Name is Ben", 2000, "Hi, My Name is Shyam", 2000]}
            wrapper="h1"
            speed={20}
            deletionSpeed={40}
            repeat={Infinity}
        />
    );
};

export { NameAnimation };