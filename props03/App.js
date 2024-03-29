import React from "react"
import Joke from "./Joke"

export default function App (){
    return (
        <div>
            <Joke
                // setup = "I got my daughter a fridge for her birthday."
                punchLine = "I can't wait to see her face light up when she opens it."
            />
            <Joke 
                setup = "How did the hacker escape the police?"
                punchLine = "He just ransomware!"
            />
            <Joke
                // setup = "Why don't pirates travel on mountain roads?"
                punchLine = "Scurvy."
            />
            <Joke 
                setup = "Why do bees stay in the hive in the winter?"
                punchLine = "Swarm."
            />
        </div>
    )
}
