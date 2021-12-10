import { useEffect, useState } from "react/cjs/react.development";

const Useeffect2 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    function handleResize() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return (
        <h1 className="text-center text-2xl my-8">{width}</h1>
    )
}

export default Useeffect2;