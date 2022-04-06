import { useEffect, useState } from "react"

export default function MainPage(props) {
    const [question, setQuestion] = useState([])

    const getData = async () => {
        try {
            const response = await fetch("https://jservice.io/api/random")
            const data = await response.json()
            setQuestion(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // const questionObject = question.map()

    const [score, setScore] = useState(0)

    const increaseScore = () => {
        setScore(score += question.value)
    }
    const decreaseScore = () => {
        setScore(score -= question.value)
    }

    const resetScore = () => {
        setScore(0)
    }

    return (
        <>
            {question.map((item, idx) => {
                return (
                    <>
                        <h1> WELCOME TO JEOPARDY</h1>
                        <h2>Score: <span>{score}</span></h2>
                        <div className="buttonContainer">
                            <button className="button1" onClick={() => { increaseScore() }}>Decrease</button>
                            <button className="button2" onClick={() => { decreaseScore() }}>Increase</button>
                            <button className="button3" onClick={() => { resetScore() }}>Reset</button>
                        </div>
                        <h2>Let's Play!</h2>
                        <button className="button4" onClick={() => { getData() }}>Get Question</button>
                        <h2>Category: <span>{item.category.title}</span></h2>

                        <h2>Answer: <span>{item.answer}</span></h2>
                        <button className="button5" onClick={() => { increaseScore() }}>Click to Reveal Question</button>

                    </>
                );
            })
            }
        </>
    )
}