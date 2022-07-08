import React, { createContext, useState } from "react";

export const PollContext = createContext();

const pollProvider = ({ children }) => {
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([
        { option: '', votes: -1},
        { option: '', votes: -1},
        { option: '', votes: -1},
        { option: '', votes: -1}
    ])

    return (
        <PollContext.Provider value={{question, setQuestion, answers, setAnswers}}>
            {children}
        </PollContext.Provider>
    )
}

export default pollProvider;